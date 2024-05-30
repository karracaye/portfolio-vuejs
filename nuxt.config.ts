
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['/style.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})