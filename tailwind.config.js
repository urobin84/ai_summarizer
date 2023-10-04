/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      boxShadow: {
        'custom-1': 'inset 10px -50px 94px 0 rgb(199, 199, 199, 0.2)',
        'custom-1': 'inset 10px -50px 94px 0 rgb(199, 199, 199, 0.2)',
      }
    },
  },
  plugins: [],
}