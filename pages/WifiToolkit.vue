<template>
  <div class="wrapper">
    <div class="margins">
      <div class="header flex items-center justify-between">
        <h1 class="heading">WIFI Toolkit</h1>
        <router-link to="/" class="home-button">
          <button class="home-button-style">Home</button>
        </router-link>
      </div>
      <p class="description">
        Welcome to the Technician WIFI Toolkit. Here you can access a GUI or create a WIFI QR Code.
      </p>
      <div class="router-links">
        <p>
          <a
            href="http://192.168.0.1"
            target="_blank"
            rel="noopener noreferrer"
            class="link-style"
            >192.168.0.1</a
          >
        </p>
        <p>
          <a
            href="http://192.168.1.1"
            target="_blank"
            rel="noopener noreferrer"
            class="link-style"
            >192.168.1.1</a
          >
        </p>
        <p>
          <a
            href="http://10.0.0.1"
            target="_blank"
            rel="noopener noreferrer"
            class="link-style"
            >10.0.0.1</a
          >
        </p>
      </div>

      <div class="qr-generator tool">
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
      </div>

      <div class="tool wifi-channels">
        <table class="mac-table" style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="border: 1px solid #6b7280; padding: 0.75rem; text-align: left; background-color: #374151;">Frequency Band</th>
              <th style="border: 1px solid #6b7280; padding: 0.75rem; text-align: left; background-color: #374151;">Channel Number</th>
              <th style="border: 1px solid #6b7280; padding: 0.75rem; text-align: left; background-color: #374151;">Bandwidth (MHz)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3" style="border: 1px solid #6b7280; padding: 0.75rem; background-color: #4b5563;">2.4 GHz</td>
              <td style="border: 1px solid #6b7280; padding: 0.75rem;">1</td>
              <td style="border: 1px solid #6b7280; padding: 0.75rem;">20</td>
            </tr>
            <tr>
              <td style="border: 1px solid #6b7280; padding: 0.75rem;">6</td>
              <td style="border: 1px solid #6b7280; padding: 0.75rem;">20</td>
            </tr>
            <tr>
              <td style="border: 1px solid #6b7280; padding: 0.75rem;">11</td>
              <td style="border: 1px solid #6b7280; padding: 0.75rem;">20</td>
            </tr>
            <tr>
              <td rowspan="3" style="border: 1px solid #6b7280; padding: 0.75rem; background-color: #4b5563;">5 GHz</td>
              <td style="border: 1px solid #6b7280; padding: 0.75rem;">36</td>
              <td style="border: 1px solid #6b7280; padding: 0.75rem;">20 / 40</td>
            </tr>
            <tr>
              <td style="border: 1px solid #6b7280; padding: 0.75rem;">44</td>
              <td style="border: 1px solid #6b7280; padding: 0.75rem;">20 / 40</td>
            </tr>
            <tr>
              <td style="border: 1px solid #6b7280; padding: 0.75rem;">149</td>
              <td style="border: 1px solid #6b7280; padding: 0.75rem;">20 / 40</td>
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

<style scoped>
.wrapper {
  padding: 2rem;
  background-color: #1f2937;
  color: #ffffff;
}

.margins {
  margin: auto;
  max-width: 800px;
}

.header {
  margin-bottom: 2rem;
}

.heading {
  font-size: 2rem;
  font-weight: bold;
}

.home-button-style {
  background-color: #4b5563;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}

.link-style {
  color: #60a5fa; 
  text-decoration: none;
}

.link-style:hover {
  text-decoration: underline;
}

.qr-generator,
.wifi-channels {
  background-color: #374151;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.qr-code {
  width: 200px;
  height: 200px;
}

.action-button,
.share-button {
  background-color: #60a5fa;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}

.footer {
  text-align: center;
  margin-top: 2rem;
}

.gradient__text {
  background: linear-gradient(to right, #6ee7b7, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hover-underline-animation {
  position: relative;
  color: #60a5fa;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background-color: #60a5fa;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
}
</style>

