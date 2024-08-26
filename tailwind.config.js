/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
}