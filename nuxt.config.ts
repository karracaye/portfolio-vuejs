
export default defineNuxtConfig({
  
  devtools: { enabled: true },
  css: ['/style.css', '@fortawesome/fontawesome-free/css/all.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      
    },
  },
  
})