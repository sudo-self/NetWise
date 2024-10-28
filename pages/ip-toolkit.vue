<template>
  <div class="wrapper">
    <div class="margins">
      <div class="header">
        <h1 class="heading">IP Toolkit</h1>
        <router-link to="/" class="home-button">
          <button class="action-button">Home</button>
        </router-link>
      </div>
      <p class="description">Check, lookup, and convert IPs to other formats.</p>

      <div class="toolkit">
        <div class="tool">
          <h2 class="tool-title">Check Public IP</h2>
          <p class="tool-description">Find out your current public IP address.</p>
          <button class="action-button" @click="fetchPublicIP" :disabled="loading">Check IP</button>
          <p v-if="loading">Loading...</p>
          <p v-if="publicIP" class="result">Your Public IP: <span class="gradient__text">{{ publicIP }}</span></p>
        </div>

        <div class="tool">
          <h2 class="tool-title">IP Lookup</h2>
          <p class="tool-description">Look up information about a specific IP address.</p>
          <input v-model="ipInput" type="text" placeholder="Enter IP Address" class="ip-input" aria-label="IP address input" />
          <button class="action-button" @click="lookupIP" :disabled="loading">Lookup IP</button>
          <p v-if="ipInfo" class="result">IP Info: <pre class="gradient__text">{{ ipInfo }}</pre></p>
          <p v-if="ipError" class="error-message">{{ ipError }}</p>
        </div>

        <div class="tool">
          <h2 class="tool-title">IP Converter</h2>
          <p class="tool-description">Convert IPv4 address to different formats.</p>
          <input v-model="ipv4Input" type="text" placeholder="Enter IPv4 Address" class="ip-input" aria-label="IPv4 address input" />
          <button class="action-button" @click="convertIP" :disabled="loading">Convert IP</button>
          
          <div class="converter-results" v-if="convertedResults">
            <p><strong>Decimal:</strong> <span class="gradient__text">{{ convertedResults.decimal }}</span></p>
            <p><strong>Hexadecimal:</strong> <span class="gradient__text">{{ convertedResults.hex }}</span></p>
            <p><strong>Binary:</strong> <span class="gradient__text">{{ convertedResults.binary }}</span></p>
            <p><strong>IPv6:</strong> <span class="gradient__text">{{ convertedResults.ipv6 }}</span></p>
            <p><strong>IPv6 (short):</strong> <span class="gradient__text">{{ convertedResults.ipv6Short }}</span></p>
          </div>
          <p v-if="conversionError" class="error-message">{{ conversionError }}</p>
        </div>

        <div class="tool">
          <h2 class="tool-title">IP Classes</h2>
          <p class="tool-description">Classes, Ranges, and Uses.</p>
          <table class="ip-classes-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Range</th>
                <th>Use</th>
                <th>Public/Private</th>
                <th>Potential Addresses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>1.0.0.0 to 126.0.0.0</td>
                <td>Large networks, unicast</td>
                <td>Public</td>
                <td>16,777,216</td>
              </tr>
              <tr>
                <td>B</td>
                <td>128.0.0.0 to 191.255.0.0</td>
                <td>Medium networks, unicast</td>
                <td>Public</td>
                <td>65,536</td>
              </tr>
              <tr>
                <td>C</td>
                <td>192.0.0.0 to 223.255.255.0</td>
                <td>Small networks, unicast (small businesses)</td>
                <td>Public</td>
                <td>256</td>
              </tr>
              <tr>
                <td>D</td>
                <td>224.0.0.0 to 239.255.255.255</td>
                <td>Multicast</td>
                <td>Public</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>E</td>
                <td>240.0.0.0 to 255.255.255.255</td>
                <td>Reserved for future use</td>
                <td>Reserved</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <footer class="margins footer">
        <div class="social">
          <a href="https://x.com/ilostmyipad" rel="noopener noreferrer" target="_blank" class="hover-underline-animation">
            <span class="gradient__text">@iLostmyipad</span>
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const publicIP = ref('');
const ipInput = ref('');
const ipv4Input = ref('');
const ipInfo = ref('');
const convertedResults = ref(null);
const ipError = ref('');
const conversionError = ref('');
const loading = ref(false);

const fetchPublicIP = async () => {
  loading.value = true;
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    publicIP.value = data.ip;
  } catch (error) {
    publicIP.value = '';
    console.error('Error fetching public IP:', error);
  } finally {
    loading.value = false;
  }
};

const lookupIP = async () => {
  const ip = ipInput.value.trim();

  if (!ip) {
    ipError.value = 'Please enter an IP address.';
    return;
  }

  ipError.value = '';
  loading.value = true; 
  try {
    const response = await fetch(`https://ipinfo.io/${ip}/json`);
    if (!response.ok) {
      throw new Error('IP address not found or invalid.');
    }

    const data = await response.json();
    ipInfo.value = JSON.stringify(data, null, 2);
  } catch (error) {
    ipInfo.value = '';
    ipError.value = error.message || 'Error looking up IP address.';
    console.error('Error looking up IP:', error);
  } finally {
    loading.value = false;
  }
};

const convertIP = () => {
  const ip = ipv4Input.value.trim();
  if (!isValidIPv4(ip)) {
    conversionError.value = 'Please enter a valid IPv4 address.';
    convertedResults.value = null;
    return;
  }

  const parts = ip.split('.').map(Number);
  convertedResults.value = {
    decimal: parts.reduce((acc, part) => (acc << 8) + part, 0),
    hex: parts.map(part => part.toString(16).padStart(2, '0')).join(''),
    binary: parts.map(part => part.toString(2).padStart(8, '0')).join('.'),
    ipv6: convertToIPv6(ip),
    ipv6Short: shortenIPv6(convertToIPv6(ip)),
  };
  conversionError.value = '';
};

const isValidIPv4 = (ip) => {
  const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){2}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return regex.test(ip);
};

const convertToIPv6 = (ip) => {
  const parts = ip.split('.').map(Number);
  return `::ffff:${parts[0].toString(16).padStart(2, '0')}${parts[1].toString(16).padStart(2, '0')}${parts[2].toString(16).padStart(2, '0')}${parts[3].toString(16).padStart(2, '0')}`;
};

const shortenIPv6 = (ipv6) => {
  return ipv6.replace(/(.*)(0+)(.*)/, '$1:$3').replace(/:{3,}/g, '::'); 
};
</script>

<style scoped>
.wrapper {
  background-color: #1e1e1e;
  color: white;
  padding: 20px;
  border-radius: 8px;
}

.margins {
  margin: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.heading {
  font-size: 2em;
  margin: 0;
}

.home-button {
  text-decoration: none;
}

.action-button {
  background-color: #007BFF;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.action-button:disabled {
  background-color: #555;
}

.tool {
  margin-top: 20px;
}

.tool-title {
  font-size: 1.5em;
  margin: 10px 0;
}

.tool-description {
  color: #999;
}

.ip-input {
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #333;
  color: white;
}

.result {
  margin-top: 10px;
}

.error-message {
  color: red;
}

.converter-results {
  margin-top: 10px;
}

.ip-classes-table {
  width: 100%;
  border-collapse: collapse;
}

.ip-classes-table th, .ip-classes-table td {
  border: 1px solid #555;
  padding: 8px;
}

.footer {
  text-align: center;
  margin-top: 20px;
}

.social {
  margin-top: 10px;
}

.gradient__text {
  background: linear-gradient(to right, #FF0080, #FF8C00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hover-underline-animation {
  position: relative;
  text-decoration: none;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background-color: #FF0080;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
}
</style>


