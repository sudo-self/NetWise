<template>
  <div class="wrapper">
    <div class="margins">
      <header class="header flex items-center justify-between">
        <h1 class="heading">WIFI Toolkit</h1>
        <router-link to="/" class="home-button">
          <button class="home-button-style">Home</button>
        </router-link>
      </header>

      <p class="description">
        Welcome to the Technician WIFI Toolkit. Here you can access a GUI or create a WIFI QR Code.
      </p>

      <section class="link-section tool">
        <h2 class="sub-heading">Router Links</h2>
        <div class="router-links">
          <a href="http://192.168.0.1" target="_blank" rel="noopener noreferrer" class="router-link">192.168.0.1</a>
          <a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer" class="router-link">192.168.1.1</a>
          <a href="http://10.0.0.1" target="_blank" rel="noopener noreferrer" class="router-link">10.0.0.1</a>
        </div>
      </section>

      <section class="qr-generator tool">
        <h2 class="sub-heading">WiFi QR Code Generator</h2>
        <form @submit.prevent="generateQRCode">
          <div class="mb-4">
            <label class="block mb-1 gradient__text">Encryption Method:</label>
            <select v-model="encryptionMethod" class="input-field">
              <option value="WPA/WPA2">WPA/WPA2</option>
              <option value="WEP">WEP</option>
              <option value="None">None</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block mb-1 gradient__text">SSID:</label>
            <input type="text" v-model="ssid" class="input-field" required />
          </div>

          <div class="mb-4">
            <label class="block mb-1 gradient__text">Password:</label>
            <input type="password" v-model="password" class="input-field" required />
          </div>

          <div class="mb-4">
            <label class="block mb-1 gradient__text">Foreground Color:</label>
            <input type="color" v-model="foregroundColor" class="color-picker-input" />
          </div>

          <div class="mb-4">
            <label class="block mb-1 gradient__text">Background Color:</label>
            <input type="color" v-model="backgroundColor" class="color-picker-input" />
          </div>

          <button type="submit" class="action-button gradient__button">Generate QR Code</button>
        </form>

        <div v-if="qrCodeUrl" class="mt-6">
          <h3 class="sub-heading">Scan to Connect</h3>
          <img :src="qrCodeUrl" alt="WiFi QR Code" class="qr-code" />
          <button @click="shareQRCode" class="share-button gradient__button">Share QR Code</button>
        </div>
      </section>

      <section class="tool wifi-channels">
        <h2 class="sub-heading">WiFi Channels</h2>
        <table class="mac-table">
          <thead>
            <tr>
              <th>Frequency Band</th>
              <th>Channel Number</th>
              <th>Bandwidth (MHz)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3">2.4 GHz</td>
              <td>1</td>
              <td>20</td>
            </tr>
            <tr>
              <td>6</td>
              <td>20</td>
            </tr>
            <tr>
              <td>11</td>
              <td>20</td>
            </tr>
            <tr>
              <td rowspan="3">5 GHz</td>
              <td>36</td>
              <td>20 / 40</td>
            </tr>
            <tr>
              <td>44</td>
              <td>20 / 40</td>
            </tr>
            <tr>
              <td>149</td>
              <td>20 / 40</td>
            </tr>
          </tbody>
        </table>
      </section>

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

<script>
export default {
  data() {
    return {
      encryptionMethod: 'WPA/WPA2',
      ssid: '',
      password: '',
      foregroundColor: '#000000',
      backgroundColor: '#ffffff',
      qrCodeUrl: ''
    };
  },
  methods: {
    generateQRCode() {
      const wifiString = `WIFI:S:${this.ssid};T:${this.encryptionMethod};P:${this.password};;;`;
      const colorForeground = this.foregroundColor.replace('#', '');
      const colorBackground = this.backgroundColor.replace('#', '');

      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(wifiString)}&size=200x200&color=${colorForeground}&bgcolor=${colorBackground}`;
      this.qrCodeUrl = qrUrl;
    },
    shareQRCode() {
      if (this.qrCodeUrl) {
        if (navigator.share) {
          navigator.share({
            title: 'WiFi QR Code',
            text: 'WiFi Connection Code',
            url: this.qrCodeUrl,
          }).then(() => {
            this.$toast.success('QR Code shared successfully!');
          }).catch((error) => {
            this.$toast.error('Error sharing QR Code: ' + error);
          });
        } else {
          navigator.clipboard.writeText(this.qrCodeUrl).then(() => {
            this.$toast.success('QR Code link copied to clipboard!');
          }).catch(() => {
            this.$toast.error('Failed to copy QR Code link.');
          });
        }
      }
    }
  }
};
</script>

<style scoped>
body {
  background-color: #0c0a09;
  margin: 0;
  color: #ada9a9;
}

.wrapper {
  background-color: #0c0a09;
  color: #ada9a9;
  padding: 2rem;
}

.margins {
  padding-left: 1rem;
  padding-right: 1rem;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.heading {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.home-button-style {
  background-color: #12a87b;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.home-button-style:hover {
  background-color: #0fcf97;
}

.description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.link-section {
  background-color: #1f2937;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
}

.router-links {
  display: flex;
  flex-direction: column;
}

.router-link {
  color: #0fcf97;
  text-decoration: none;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #0fcf97;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.router-link:hover {
  background-color: #0fcf97;
  color: #0c0a09; /* Dark background color */
}

.qr-generator {
  background-color: #1f2937;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.sub-heading {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
}

.input-field {
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  padding: 0.5rem;
  width: 100%;
  background-color: #f3f0f0;
}

.color-picker-input {
  width: 100%;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem;
}

.action-button {
  background-color: #12a87b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #0fcf97;
}

.qr-code {
  width: 200px; /* Or adjust to fit your layout */
  height: 200px; /* Or adjust to fit your layout */
}

.share-button {
  background-color: #12a87b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.share-button:hover {
  background-color: #0fcf97;
}

.mac-table {
  width: 100%;
  border-collapse: collapse;
}

.mac-table th,
.mac-table td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}

.footer {
  margin-top: 2rem;
  text-align: center;
}

.social {
  margin-top: 1rem;
}

.hover-underline-animation {
  position: relative;
  color: #12a87b;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 100%;
  background-color: #0fcf97;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
}

.gradient__text {
  background: linear-gradient(to right, #12a87b, #0fcf97);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient__button {
  background: linear-gradient(to right, #12a87b, #0fcf97);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
}
</style>



