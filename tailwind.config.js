/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apolloBlue': '#0078c8'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
