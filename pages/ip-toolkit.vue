<template>
  <div class="wrapper">
    <div class="margins">
      <div class="header">
        <h1 class="heading">IP Toolkit</h1>
       
        <router-link to="/" class="home-button">
          <button class="action-button">Home</button>
        </router-link>
      </div>
      <p class="description">check, lookup, and convert IPs to other formats.</p>

      <div class="toolkit">
       
        <div class="tool">
          <h2 class="tool-title">Check Public IP</h2>
          <p class="tool-description">Find out your current public IP address.</p>
          <button class="action-button" @click="fetchPublicIP">Check IP</button>
          <p v-if="publicIP" class="result">Your Public IP: <span class="gradient__text">{{ publicIP }}</span></p>
        </div>

     
        <div class="tool">
          <h2 class="tool-title">IP Lookup</h2>
          <p class="tool-description">Look up information about a specific IP address.</p>
          <input v-model="ipInput" type="text" placeholder="Enter IP Address" class="ip-input" />
          <button class="action-button" @click="lookupIP">Lookup IP</button>
          <p v-if="ipInfo" class="result">IP Info: <span class="gradient__text">{{ ipInfo }}</span></p>
          <p v-if="ipError" class="error-message">{{ ipError }}</p>
        </div>

        <!-- IP Converter Tool -->
        <div class="tool">
          <h2 class="tool-title">IP Converter</h2>
          <p class="tool-description">Convert IPv4 address to different formats.</p>
          <input v-model="ipv4Input" type="text" placeholder="Enter IPv4 Address" class="ip-input" />
          <button class="action-button" @click="convertIP">Convert IP</button>
          
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
    </div>


    <footer class="margins footer">
      <div class="social">
        <a href="https://x.com/ilostmyipad" rel="noopener noreferrer" target="_blank" class="hover-underline-animation">
          <span class="gradient__text">@iLostmyipad</span>
        </a>
      </div>
    </footer>
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


const fetchPublicIP = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    publicIP.value = data.ip;
  } catch (error) {
    publicIP.value = '';
    console.error('Error fetching public IP:', error);
  }
};


const lookupIP = async () => {
  const ip = ipInput.value.trim(); 

  if (!ip) {
    ipError.value = 'Please enter an IP address.';
    return;
  }

  ipError.value = '';
  console.log('Looking up IP:', ip);
  
  try {
    const response = await fetch(`https://ipinfo.io/${ip}/json`);
    console.log('IP Lookup Response:', response);

    if (!response.ok) {
      throw new Error('IP address not found or invalid.');
    }

    const data = await response.json();
    console.log('IP Info Data:', data);
    ipInfo.value = JSON.stringify(data, null, 2); 
  } catch (error) {
    ipInfo.value = '';
    ipError.value = error.message || 'Error looking up IP address.';
    console.error('Error looking up IP:', error);
  }
};


const convertIP = () => {
  const ip = ipv4Input.value.trim(); 
  console.log('Converting IP:', ip);

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
  console.log('Converted Results:', convertedResults.value);
  conversionError.value = '';
};


const isValidIPv4 = (ip) => {
  const parts = ip.split('.');
  return parts.length === 4 && parts.every(part => {
    const num = Number(part);
    return num >= 0 && num <= 255 && String(num) === part;
  });
};

const convertToIPv6 = (ip) => {
  const parts = ip.split('.').map(Number);
  return `::ffff:${parts.map(part => part.toString(16).padStart(2, '0')).join('')}`;
};


const shortenIPv6 = (ipv6) => {
  return ipv6.replace(/(:|^)([0]{1,3})/g, '::').replace(/:0+/g, ':').replace(/:0/g, ':').replace(/:$/g, '').replace(/::+/g, '::');
};
</script>


<style scoped>

body {
  background-color: #0c0a09; 
  margin: 0; 
  color: #000; 
}

.wrapper {
  background-color: #0c0a09;
  color: #fff;
  padding: 2rem;
  border-radius: 0px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.margins {
  padding-left: 1rem;
  padding-right: 1rem;
}

.heading {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.25rem;
}

.toolkit {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tool {
  background-color: #1f2937;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.tool-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.tool-description {
  margin-bottom: 1rem;
}

.ip-input {
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  width: calc(100% - 1rem);
  margin-bottom: 1rem;
  color: #000;
}

.action-button {
  background-color: #12a87b;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  bottom: 5px;
}

.action-button:hover {
  background-color: #0fcf97;
}

.result {
  margin-top: 1rem;
  font-size: 1rem;
  color: #5bf3c7;
}

.error-message {
  margin-top: 1rem;
  color: #e74c3c;
}

.gradient__text {
  background: linear-gradient(90deg, #7bceb6 10%, #12a87b 40%, #0fcf97 60%, #7bceb6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer {
  color: #444;
  padding-top: 1rem;
  margin-top: 2rem;
  text-align: center;
}

.social a {
  text-decoration: none;
  color: #000;
}

.hover-underline-animation {
  position: relative;
  display: inline-block;
}

.hover-underline-animation:after {
  content: "";
  background: #12a87b;
  height: 2px;
  left: 50%;
  position: absolute;
  transition: all 0.3s ease;
  width: 0;
}

.hover-underline-animation:hover:after {
  left: 0;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center; 
}

.home-button {
  margin-left: auto; 
}


.table-container {
  overflow-x: auto;
}

.ip-classes-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.ip-classes-table th,
.ip-classes-table td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}

.ip-classes-table th {
  background-color: #1f2937;
  color: #fff;
}

.ip-classes-table tr:nth-child(even) {
  background-color: #2d3748;
}

@media (max-width: 768px) {
  .ip-classes-table th:nth-child(4),
  .ip-classes-table th:nth-child(5),
  .ip-classes-table td:nth-child(4),
  .ip-classes-table td:nth-child(5) {
    display: none;
  }
}

</style>
