<template>
  <div class="wrapper">
    <div class="margins">
      <h2 class="sub-heading">DNS Lookup Tool</h2>

      <form @submit.prevent="fetchDNSRecords">
        <div class="mb-4">
          <div class="flex justify-end mt-4">
            <router-link to="/" class="home-button">
              <button class="action-button">Home</button>
            </router-link>
          </div>
          <label class="block mb-1 gradient__text">Domain:</label>
          <input
            type="text"
            v-model="domain"
            class="input-field"
            placeholder="enter a domain"
            required
          />
        </div>
        <button type="submit" class="action-button gradient__button">Lookup DNS Records</button>
      </form>

      
      <div class="record-types mt-4">
        <h3 class="sub-heading">Record Types</h3>
        <ul class="record-list">
          <li><span class="gradient__text">A:</span> Maps a domain to an IPv4 address.</li>
          <li><span class="gradient__text">AAAA:</span> Maps a domain to an IPv6 address.</li>
          <li><span class="gradient__text">CNAME:</span> Canonical name record that aliases one domain to another.</li>
          <li><span class="gradient__text">MX:</span> Mail exchange record that specifies the mail server for the domain.</li>
          <li><span class="gradient__text">NS:</span> Name server record that indicates which server is authoritative for the domain.</li>
          <li><span class="gradient__text">TXT:</span> Text record that can hold arbitrary text data for various uses, such as verification.</li>
          <li><span class="gradient__text">SOA:</span> Start of authority record that provides information about the domain's DNS zone.</li>
          <li><span class="gradient__text">SRV:</span> Service record that specifies the location of servers for specified services.</li>
          <li><span class="gradient__text">PTR:</span> Pointer record used for reverse DNS lookups, mapping an IP address to a domain name.</li>
          <li><span class="gradient__text">SPF:</span> Sender Policy Framework record that defines which mail servers are permitted to send email on behalf of the domain.</li>
          <li><span class="gradient__text">DKIM:</span> DomainKeys Identified Mail record that provides a method for validating the authenticity of email messages.</li>
          <li><span class="gradient__text">DMARC:</span> Domain-based Message Authentication, Reporting, and Conformance record that helps protect against email spoofing.</li>
        </ul>
      </div>

      <div v-if="dnsRecords.length" class="mt-6">
        <h3 class="sub-heading">DNS Records for {{ domain }}</h3>
        <table class="mac-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Record</th>
              <th>TTL</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, index) in dnsRecords" :key="index">
              <td>{{ record.type }}</td>
              <td>{{ record.value }}</td>
              <td>{{ record.ttl }}</td>
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

const domain = ref('');
const dnsRecords = ref([]);
const errorMessage = ref('');

const fetchDNSRecords = async () => {
  dnsRecords.value = [];
  errorMessage.value = '';

  try {
    const response = await $fetch('/api/dnsLookup', {
      method: 'POST',
      body: {
        url: domain.value,
      },
    });

    if (!response || !response.data) {
      throw new Error('No DNS records found for this domain');
    }

    // Populate dnsRecords with response data
    if (response.data.A) {
      response.data.A.forEach(record => {
        dnsRecords.value.push({
          type: 'A',
          value: record.address,
          ttl: record.ttl,
        });
      });
    }

    if (response.data.AAAA) {
      response.data.AAAA.forEach(record => {
        dnsRecords.value.push({
          type: 'AAAA',
          value: record.address,
          ttl: record.ttl,
        });
      });
    }

    if (response.data.CNAME) {
      response.data.CNAME.forEach(record => {
        dnsRecords.value.push({
          type: 'CNAME',
          value: record.cname,
          ttl: record.ttl,
        });
      });
    }

    if (response.data.MX) {
      response.data.MX.forEach(record => {
        dnsRecords.value.push({
          type: 'MX',
          value: record.exchange,
          ttl: record.priority, // Assuming priority as TTL for display
        });
      });
    }

    if (response.data.NS) {
      response.data.NS.forEach(record => {
        dnsRecords.value.push({
          type: 'NS',
          value: record.ns,
          ttl: record.ttl,
        });
      });
    }

    if (response.data.TXT) {
      response.data.TXT.forEach(record => {
        dnsRecords.value.push({
          type: 'TXT',
          value: record.text,
          ttl: record.ttl,
        });
      });
    }

    if (response.data.SOA) {
      dnsRecords.value.push({
        type: 'SOA',
        value: `${response.data.SOA.mname} ${response.data.SOA.rname}`,
        ttl: response.data.SOA.ttl,
      });
    }

    if (response.data.SRV) {
      response.data.SRV.forEach(record => {
        dnsRecords.value.push({
          type: 'SRV',
          value: `${record.priority} ${record.weight} ${record.port} ${record.target}`,
          ttl: record.ttl,
        });
      });
    }

    if (response.data.PTR) {
      response.data.PTR.forEach(record => {
        dnsRecords.value.push({
          type: 'PTR',
          value: record.ptrdname,
          ttl: record.ttl,
        });
      });
    }

    if (response.data.SPF) {
      response.data.SPF.forEach(record => {
        dnsRecords.value.push({
          type: 'SPF',
          value: record.text,
          ttl: record.ttl,
        });
      });
    }

    if (response.data.DKIM) {
      response.data.DKIM.forEach(record => {
        dnsRecords.value.push({
          type: 'DKIM',
          value: record.text,
          ttl: record.ttl,
        });
      });
    }

    if (response.data.DMARC) {
      response.data.DMARC.forEach(record => {
        dnsRecords.value.push({
          type: 'DMARC',
          value: record.text,
          ttl: record.ttl,
        });
      });
    }

  } catch (error) {
    errorMessage.value = error.message || 'An error occurred while fetching DNS records.';
  }
};

</script>

<style scoped>
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
.record-types {
  background-color: #1f2937; /* Slightly darker background for visibility */
  padding: 1rem;
  border-radius: 0.5rem;
}
.record-list {
  list-style-type: none; /* Remove default list styling */
  padding-left: 0; /* Remove default padding */
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
.mac-table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
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
    animation:shine 1s linear infinite
}
</style>


