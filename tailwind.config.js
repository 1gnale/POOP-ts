/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown": "#a37800"
      },
      fontFamily: {
        "Cascadia": ['Cascadia'],
      },
    },
    plugins: [],
  }
}
