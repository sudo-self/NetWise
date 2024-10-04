// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  // TypeScript configuration
  typescript: {
    shim: true,
  },

  // Nitro configuration
  nitro: {
    experimental: {
      openAPI: false,
    },
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  // CSS configuration
  css: [
    '@/assets/css/tailwind.css', // Add your Tailwind CSS file
  ],

  // PostCSS configuration
  build: {
    postcss: {
      plugins: {
        tailwindcss: {}, // Tailwind CSS plugin
        autoprefixer: {}, // Autoprefixer plugin
      },
    },
  },

  // Server handlers
  serverHandlers: [
    {
      route: '/api/macLookup',
      handler: '~/server/api/macLookup.js', // Specify the handler file location
    },
    
    {
      route: '/api/macLookup',
      handler: '~/server/api/macLookup.js', // Specify the handler file location
    },
  ],

  // Head configuration
  head: {
    title: 'NetWise', // Set your app title
    meta: [
      { name: 'theme-color', content: '#000000' } // Theme color
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', sizes: '16x16 32x32', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: 'any', href: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', href: '/favicon.png' },
      { rel: 'icon', sizes: '512x512', href: '/icon512.png' },
      { rel: 'icon', sizes: '192x192', href: '/icon192.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },
});
