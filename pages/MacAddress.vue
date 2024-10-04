<template>
  <div class="wrapper">
    <div class="margins">
      <div class="header">
        <h1 class="heading">MAC Address Toolkit</h1>
        <router-link to="/" class="home-button">
          <button class="action-button">Home</button>
        </router-link>
      </div>
      <p class="description">
        Welcome to the Technician MAC Address Toolkit. Here you can manage MAC address information and tools.
      </p>

      <div class="toolkit">
        <div class="tool">
          <h2 class="tool-title">MAC Address Lookup</h2>
          <p class="tool-description">Look up information about a specific MAC address.</p>
          <input
            v-model="macInput"
            type="text"
            placeholder="Enter MAC Address"
            class="mac-input"
            :disabled="isLoading"
          />
          <button
            class="action-button"
            @click="lookupMAC"
            :disabled="isLoading"
          >
            <span v-if="isLoading">Loading...</span>
            <span v-else>Lookup MAC</span>
          </button>
          <p v-if="macInfo" class="result">
            MAC Info: <span class="gradient__text">{{ macInfo }}</span>
          </p>
          <p v-if="macError" class="error-message">{{ macError }}</p>
        </div>

        <div class="tool" v-if="ouiInfo">
          <h2 class="tool-title">OUI Breakdown</h2>
          <p class="tool-description">Details about the OUI of the MAC address.</p>
          <pre class="result"><code>{{ ouiInfo }}</code></pre>
        </div>
      </div>

      <!-- Media Access Control Section -->
      <div class="toolkit">
        <h2 class="tool-title"><span class="gradient__text">Media Access Control</span></h2>
        <p class="tool-description">The mac address identifies different devices that share the same local network.</p>

        <table class="mac-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Organizationally Unique Identifier (OUI)</td>
              <td>The first 6 characters of a MAC address identify the manufacturer.</td>
            </tr>
            <tr>
              <td>Universally Administered Address (UAA)</td>
              <td>The last 6 characters uniquely identify a device within the OUI.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer class="margins footer">
        <div class="social">
          <a
            href="https://x.com/ilostmyipad"
            rel="noopener noreferrer"
            target="_blank"
            class="hover-underline-animation"
          >
            <span class="gradient__text">@iLostmyipad</span>
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>



<script setup lang="ts">
import { ref } from 'vue';

const macInput = ref('');
const macInfo = ref('');
const ouiInfo = ref('');
const macError = ref('');
const isLoading = ref(false);

const lookupMAC = async () => {
  if (!macInput.value) {
    macError.value = 'Please enter a MAC address.';
    return;
  }

  const sanitizedMAC = macInput.value.replace(/[^a-fA-F0-9]/g, '').toUpperCase();
  if (sanitizedMAC.length !== 12) {
    macError.value = 'Invalid MAC address format. Please check the input.';
    return;
  }

  isLoading.value = true;
  macError.value = '';
  
  try {
    // Call the local API to fetch MAC address information
    const response = await fetch(`/api/macLookup?mac_address=${sanitizedMAC}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch MAC address info');
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    macInfo.value = JSON.stringify(data, null, 2);
    ouiInfo.value = `OUI: ${data.macPrefix || 'N/A'}\nCompany: ${data.company || 'N/A'}\nAddress: ${data.address || 'N/A'}\nCountry: ${data.country || 'N/A'}`;
    
  } catch (error) {
    macInfo.value = '';
    macError.value = error.message || 'Error looking up MAC address.';
  } finally {
    isLoading.value = false;
  }
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

.mac-input {
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
  color: #e74c3c; /* Error color */
}

.green-text {
  color: #12a87b; /* Green color for the response */
}

.gradient__text {
  background: linear-gradient(90deg, #7bceb6 10%, #12a87b 40%, #0fcf97 60%, #7bceb6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer {
    border-color: #1f2937;
    border-top-width: 1px;
    justify-content: space-between;
    margin-top: 2.5rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    width:100%
}

.footer, .footer .social {
    align-items: center;
    display:flex
}

.footer .social {
    gap:1.25rem
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
  display: flex; /* Ensure flexbox is applied */
  justify-content: space-between; /* Space between heading and button */
  align-items: center; /* Align items vertically centered */
}

.home-button {
  margin-left: auto; /* Push the button to the right */
}

.action-button {
  background-color: #12a87b;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #0fcf97;
}

.mac-visual {
  text-align: center;
  margin: 1rem 0;
}

.mac-visual img {
  max-width: 100%; /* Ensures the image is responsive */
  height: auto;
}

.mac-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.mac-table th, .mac-table td {
  padding: 0.5rem;
  border: 1px solid #ddd;
  text-align: left;
}

</style>













