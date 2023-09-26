/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/index.html",
  ],
  theme: {
    colors:{
      danger: "red",
      secondary: "indigo",
      green:"green",
      white: "white",
      yellow: "#FFBF69",
      gray: "#E5E5E5",
      gray1: "#CCC5B9",
      black: "#000814",
    },
    extend: {
      
    },
  },
  plugins: [],
}
