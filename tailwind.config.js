/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {


    extend: {
      colors: {
        "themeRed": "#F54748",
        "themeBlack": "#2E2E2E",
        "pink": "#FDECEC",
        "gray": "#828282",
        "green": "	#7CFC00"
      },
    },
  },
  plugins: [],
}