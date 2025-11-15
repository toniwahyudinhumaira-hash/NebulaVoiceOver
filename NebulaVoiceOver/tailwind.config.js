/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        nebulaBlue: '#00adff',
        nebulaPurple: '#7b2ff7',
        bgDark: '#0b0f1a'
      }
    },
  },
  plugins: [],
}
