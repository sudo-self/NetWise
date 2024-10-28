<template>
  <div class="wrapper">
    <div class="margins">
      <h2 class="sub-heading">PING Toolkit</h2>
      <div class="flex justify-end mt-4">
        <router-link to="/" class="home-button">
          <button class="action-button">Home</button>
        </router-link>
      </div>
      <h4 class="description">Check the reachability of a host by sending ping requests.</h4>

      <div class="input-group">
        <input 
          type="text" 
          v-model="pingUrl" 
          placeholder="Enter URL to ping https://" 
          class="input-field"
        />
        <button @click="sendPing" class="action-button">Ping</button>
      </div>

      <div v-if="loading" class="loading">Pinging...</div>

      <div v-if="pingResult" class="record-types">
        <h3 class="sub-heading">Ping Result:</h3>
        <p><strong>IP:</strong> {{ pingResult.ip }}</p>
        <p><strong>Requests:</strong> {{ pingResult.requests }}</p>
        <p><strong>Loss:</strong> {{ pingResult.loss }}%</p>
        <p><strong>Latency:</strong> {{ pingResult.latency }} ms</p>
        <p><strong>Min:</strong> {{ pingResult.min }} ms</p>
        <p><strong>Max:</strong> {{ pingResult.max }} ms</p>
        <p><strong>Avg:</strong> {{ pingResult.avg }} ms</p>
        <p><strong>Standard Deviation:</strong> {{ pingResult.stdDev }} ms</p>
      </div>

      <div v-if="error" class="error-message">{{ error }}</div>

      <h3 class="sub-heading mt-8">Ping Command</h3>
      <p class="description">
        Ping is a network utility tool used to test the reachability of a host on an Internet Protocol (IP) network. 
        It sends Internet Control Message Protocol (ICMP) Echo Request messages to the target host and waits for 
        an Echo Reply. The results provide information on the IP address of the host, the number of requests sent, 
        the packet loss percentage, and the round-trip time it takes for the packets to travel to the host and back.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const pingUrl = ref('');
const loading = ref(false);
const pingResult = ref(null);
const error = ref(null);

const sendPing = async () => {
  loading.value = true;
  error.value = null;
  pingResult.value = null;

  try {
    const response = await fetch('/api/ping', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: pingUrl.value }),
    });

    if (!response.ok) {
      throw new Error('Failed to ping the provided URL.');
    }

    const data = await response.json();
    pingResult.value = data.data; 
  } catch (err) {
    error.value = err.message || 'An unexpected error occurred.';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
body, html {
  min-height: 100vh;
  margin: 0;
  background-color: #0c0a09; 
}

.wrapper {
  padding: 2rem;
  background-color: #0c0a09;
  color: #ada9a9;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
.input-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.input-field {
  @apply border border-gray-300 rounded p-2 w-full;
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
.record-types {
  background-color: #1f2937; /* Slightly darker background for visibility */
  padding: 1rem;
  border-radius: 0.5rem;
}
.loading {
  margin-top: 1rem;
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

