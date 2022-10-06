/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/index.html","./src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        grey: "#353535",
        lightgrey: "#707070",
        blue: "#285ef3",
        lightblue: "#507cf4",
        orange: "#DA5B2C",
        lightorange: "#ffb210"
      },
      fontFamily: {
        khularegular: ["Khula Regular"],
        khulabold: ["Khula Regular"],
        martelregular: ["Martel Regular"],
        martelbold: ["Martel Bold"],
        cormorantregular: ["Cormorant Infant Regular"],
        cormorantbold: ["Cormorant Infant Bold"]
      }
    },
  },
  plugins: [],
}
