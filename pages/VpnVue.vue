<template>
  <div class="wrapper">
    <div class="margins">
      <h2 class="sub-heading">VPN Lookup Tool</h2>

      <form @submit.prevent="fetchVPNDetails">
        <div class="mb-4">
          <div class="flex justify-end mt-4">
            <router-link to="/" class="home-button">
              <button class="action-button">Home</button>
            </router-link>
          </div>
          <label class="block mb-1 gradient__text">IP Address:</label>
          <input
            type="text"
            v-model="ipAddress"
            class="input-field"
            placeholder="Enter an IP address"
            required
          />
        </div>
        <button type="submit" class="action-button gradient__button">Check VPN Status</button>
      </form>

      <div v-if="vpnDetails" class="mt-6">
        <h3 class="sub-heading">VPN Details for {{ ipAddress }}</h3>
        <table class="mac-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IP Address</td>
              <td>{{ vpnDetails.ip }}</td>
            </tr>
            <tr>
              <td>ISP</td>
              <td>{{ vpnDetails.isp }}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{{ vpnDetails.country }}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{{ vpnDetails.city }}</td>
            </tr>
            <tr>
              <td>VPN Status</td>
              <td>{{ vpnDetails.vpn ? 'Yes' : 'No' }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="errorMessage" class="error-message mt-4">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const ipAddress = ref('');
const vpnDetails = ref(null);
const errorMessage = ref('');

const fetchVPNDetails = async () => {
  vpnDetails.value = null;
  errorMessage.value = '';

  try {
    // Send GET request to the VPN lookup API
    const response = await $fetch(`/api/vpnLookup?ip_address=${ipAddress.value}`);

    if (!response) {
      throw new Error('No VPN details found for this IP address');
    }

    vpnDetails.value = response;
  } catch (error) {
    errorMessage.value = error.message || 'An error occurred while fetching VPN details.';
  }
};
</script>

<style scoped>
/* Add styling similar to your original DNS lookup tool */
.wrapper {
  padding: 2rem;
  background-color: #0c0a09;
  color: #ada9a9;
}
.margins {
  padding-left: 1rem;
  padding-right: 1rem;
}
.sub-heading {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
}
.input-field {
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  color: #000;
  background-color: #f3f0f0;
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
.mac-table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
}
.error-message {
  color: red;
  margin-top: 1rem;
}
.gradient__text {
  background: linear-gradient(90deg, #7bceb6 10%, #12a87b 40%, #0fcf97 60%, #7bceb6 90%);
  background-clip: text;
  -webkit-background-clip: text;
  background-size: 200% auto;
  color: #000;
  -webkit-text-fill-color: transparent;
  animation: shine 1s linear infinite;
}
</style>

