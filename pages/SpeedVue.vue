<template>
  <div class="wrapper">
    <div class="margins">
      <div class="header">
        <h1 class="heading">Internet Speed Categories</h1>
        <div class="flex justify-end mt-4">
          <router-link to="/" class="action-button">Home</router-link>
        </div>
      </div>

      <div class="toolkit">
        <div v-for="category in speedCategories" :key="category.title" class="tool">
          <h2 class="tool-title text-gray-300">{{ category.title }}</h2>
          <ul class="list-disc pl-5">
            <li v-for="speed in category.speeds" :key="speed.range" class="tool-description mb-1">
              <strong class="gradient__text">{{ speed.range }}</strong>: {{ speed.description }}
            </li>
          </ul>
        </div>
      </div>
    </div>

 
      <div class="speed-test-links mt-8">
        <h2 class="tool-title text-gray-300">Test Your Speed</h2>
        <p class="mb-4">Use these tools to measure your internet speed and ensure you're getting the performance you need:</p>
        <ul class="list-disc pl-5">
          <li><a href="https://www.speedtest.net" target="_blank" rel="noopener noreferrer" class="hover-underline-animation">Ookla Speedtest</a></li>
          <li><a href="https://fast.com" target="_blank" rel="noopener noreferrer" class="hover-underline-animation">Fast.com</a></li>
          <li><a href="https://fiber.google.com/speedtest/" target="_blank" rel="noopener noreferrer" class="hover-underline-animation">Google Fiber Speed Test</a></li>
        </ul>
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

<script>
export default {
  name: "InternetSpeedCategories",
  data() {
    return {
      speedCategories: [
        {
          title: "High Speed (100+ Mbps)",
          speeds: [
            { range: "100-300 Mbps", description: "Great for multiple devices streaming 4K, online gaming, and downloading large files quickly." },
            { range: "300-500 Mbps", description: "Excellent for households with heavy usage and smart home devices." },
            { range: "500+ Mbps", description: "Ideal for commercial settings and advanced gaming or tech setups." },
          ],
        },
        {
          title: "Moderate Speed (25-99 Mbps)",
          speeds: [
            { range: "25-50 Mbps", description: "Good for moderate use with some HD streaming and online gaming." },
            { range: "50-75 Mbps", description: "Capable of supporting multiple devices streaming HD content." },
            { range: "75-99 Mbps", description: "Great for a household with many connected devices and moderate gaming." },
          ],
        },
        {
          title: "Low Speed (Under 25 Mbps)",
          speeds: [
            { range: "5-10 Mbps", description: "Basic browsing and streaming on a single device in SD quality." },
            { range: "10-25 Mbps", description: "Supports light HD streaming, email, and browsing." },
          ],
        },
      ],
    };
  },
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

.tool-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.tool-description {
  margin-bottom: 1rem;
}

.list-disc {
  list-style-type: disc; 
  padding-left: 1.5rem;
}

.list-disc li {
  margin-bottom: 0.5rem;
}

.gradient__text {
  background: linear-gradient(90deg, #7bceb6 10%, #12a87b 40%, #0fcf97 60%, #7bceb6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.action-button {
    background-color: #12a87b;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    margin-left: auto;
}

.action-button:hover {
    background-color: #0fcf97;
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


</style>
