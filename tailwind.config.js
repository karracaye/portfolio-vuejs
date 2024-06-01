/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakartSans: ['Plus Jakarta Sans', 'sans-serif'],
        babylonica: ['Babylonica', 'cursive'],
        Amsterdam: ['Amsterdam'],
        
      },
    },
  },
  plugins: [],
}

