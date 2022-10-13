/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/index.html","./src/**/*.js"],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        darkgrey: "#9b9b9b",
        grey: "#353535",
        semilighgrey: "#535353",
        lightgrey: "#707070",
        darkblue: "#0635B4",
        blue: "#285ef3",
        lightblue: "#507cf4",
        orange: "#DA5B2C",
        lightorange: "#ffb210",
        dark: "#040316",
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
