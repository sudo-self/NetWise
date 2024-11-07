<template>
  <div class="wrapper">
    <div class="margins" style="padding-top: 3rem;">
      <div class="content">
        <h1 class="heading flex justify-between items-center">
          <div>
            Net<span class="gradient__text">Wise</span>
            <GameIconsOwl class="inline-block align-middle ml-2 icon-class" />
          </div>
          <div class="toolkit-text flex items-center">
            <DeviconVuejs class="inline-block ml-2 vue-icon" />
          </div>
        </h1>

        <div v-if="ipError" class="error-message">{{ ipError }}</div>
        <div v-else class="ip-address-wrapper" aria-live="polite">
          <span class="ip-address">Public IP: <span class="gradient__text">{{ ipAddress }}</span></span>
        </div>

        <div class="modules_grid">
          <div class="card relative">
            <div class="layout">
              <div class="group">
                <h2 class="heading">IP Address Toolkit</h2>
                <p class="description">IP toolkit to search, convert, and configure addresses.</p>
              </div>
              <div class="group actions">
                <router-link to="/ip-toolkit">
                  <button class="action-button">Enter</button>
                </router-link>
              </div>
            </div>
            <GameIconsOwl class="absolute bottom-2 right-2 w-6 h-6" />
          </div>

          <div class="card relative">
            <div class="layout">
              <div class="group">
                <h2 class="heading">MAC Address Toolkit</h2>
                <p class="description">MAC toolkit to search, identify, and manage hardware.</p>
              </div>
              <div class="group actions">
                <router-link to="/MacAddress">
                  <button class="action-button">Enter</button>
                </router-link>
              </div>
            </div>
            <GameIconsOwl class="absolute bottom-2 right-2 w-6 h-6" />
          </div>

          <div class="card relative">
            <div class="layout">
              <div class="group">
                <h2 class="heading">WIFI Toolkit</h2>
                <p class="description">WIFI toolkit for managing wifi connections.</p>
              </div>
              <div class="group actions">
                <router-link to="/wifiToolkit">
                  <button class="action-button">Enter</button>
                </router-link>
              </div>
            </div>
            <GameIconsOwl class="absolute bottom-2 right-2 w-6 h-6" />
          </div>

          <div class="card relative">
            <div class="layout">
              <div class="group">
                <h2 class="heading">PING Toolkit</h2>
                <p class="description">PING toolkit for checking the reachability of hosts.</p>
              </div>
              <div class="group actions">
                <router-link to="/Ping">
                  <button class="action-button">Enter</button>
                </router-link>
              </div>
            </div>
            <GameIconsOwl class="absolute bottom-2 right-2 w-6 h-6" />
          </div>

          <div class="card relative">
            <div class="layout">
              <div class="group">
                <h2 class="heading">DNS Toolkit</h2>
                <p class="description">DNS toolkit to search and identify DNS records.</p>
              </div>
              <div class="group actions">
                <router-link to="/DNSlookup">
                  <button class="action-button">Enter</button>
                </router-link>
              </div>
            </div>
            <GameIconsOwl class="absolute bottom-2 right-2 w-6 h-6" />
          </div>

          <div class="card relative">
            <div class="layout">
              <div class="group">
                <h2 class="heading">FTTH Toolkit</h2>
                <p class="description">Fiber toolkit for managing fiber-optic connections and diagnostics.</p>
              </div>
              <div class="group actions">
                <router-link to="/fiberToolkit">
                  <button class="action-button">Enter</button>
                </router-link>
              </div>
            </div>
            <GameIconsOwl class="absolute bottom-2 right-2 w-6 h-6" />
          </div>

          <div class="card relative">
            <div class="layout">
              <div class="group">
                <h2 class="heading">HTTP Toolkit</h2>
                <p class="description">HTTP Status Codes and their meanings</p>
              </div>
              <div class="group actions">
                <router-link to="/StatusCodes">
                  <button class="action-button">Enter</button>
                </router-link>
              </div>
            </div>
            <GameIconsOwl class="absolute bottom-2 right-2 w-6 h-6" />
          </div>

          <div class="card relative">
            <div class="layout">
              <div class="group">
                <h2 class="heading">VPN Toolkit</h2>
                <p class="description">VPNs Setup and configuration</p>
              </div>
              <div class="group actions">
                <router-link to="/VpnVue">
                  <button class="action-button">Enter</button>
                </router-link>
              </div>
            </div>
            <GameIconsOwl class="absolute bottom-2 right-2 w-6 h-6" />
          </div>

          <div class="card relative">
            <div class="layout">
              <div class="group">
                <h2 class="heading">Speed Toolkit</h2>
                <p class="description">internet speed test suite toolkit</p>
              </div>
              <div class="group actions">
                <router-link to="/SpeedVue">
                  <button class="action-button">Enter</button>
                </router-link>
              </div>
            </div>
            <GameIconsOwl class="absolute bottom-2 right-2 w-6 h-6" />
          </div>
        </div>

        <FloatingButton />
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
import { onMounted, ref } from 'vue';
import { useHead, useSeoMeta } from 'nuxt/app';
import GameIconsOwl from '@/pages/GameIconsOwl.vue';
import DeviconVuejs from "@/pages/DeviconVuejs.vue";
import FloatingButton from '@/pages/FloatingButton.vue';

useSeoMeta({
  title: 'NetWise',
  description: 'A Network Technicians Toolkit',
  ogTitle: 'NetWise',
  ogDescription: 'A Network Technicians Toolkit',
  ogImage: '/og-image.png',
  ogUrl: 'https://netwise.vercel.app',
  twitterTitle: 'iLostmyipad',
  twitterDescription: 'A Network Technicians Toolkit',
  twitterImage: '/og-image.png',
  twitterCard: 'summary'
});

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/apple-touch-icon.png'
    }
  ]
});

const ipAddress = ref('');
const ipError = ref('');

const fetchIpAddress = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    ipAddress.value = data.ip;
  } catch (error) {
    ipError.value = 'Unable to fetch IP address';
  }
};

onMounted(() => {
  fetchIpAddress();
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #eefbfc;
  color: #484848;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

.wrapper {
  background-color: #0e0e10;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
}

.margins {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 1024px) {
  .margins {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.content .heading {
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.25rem;
}

@media (min-width: 1280px) {
  .content .heading {
    font-size: 3rem;
    line-height: 1;
  }
}

.content .description {
  color: #9ca3af;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

@media (min-width: 1280px) {
  .content .description {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}

.modules_grid {
  display: grid;
  gap: 2rem;
  margin-top: 2.5rem;
}

@media (min-width: 768px) {
  .modules_grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .modules_grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.card {
  border-radius: 10px;
  box-shadow: inset 5px 5px 5px #0003, inset -5px -5px 15px #ffffff1a, 5px 5px 15px #0000004d, -5px -5px 15px #ffffff1a;
  padding: 30px;
  position: relative;
  transition: .5s;
}

.card .layout {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  justify-content: space-between;
}

.card .layout .group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card .layout .heading {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
}

.card .layout .description {
  color: #d1d5db;
}

.card .layout .group .actions {
  display: flex;
  gap: 0.5rem;
}

.footer {
  border-color: #1f2937;
  border-top-width: 1px;
  justify-content: space-between;
  margin-top: 2.5rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  width: 100%;
}

.footer,
.footer .social {
  align-items: center;
  display: flex;
}

.footer .social {
  gap: 1.25rem;
}

.hover-underline-animation {
    color: #5bf3c7;
    display: inline-block;
    position: relative;
    text-decoration:none
}

.hover-underline-animation:after {
    background-color: #5bf3c7;
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform .25s ease-out;
    width:100%
}

.hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left
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
