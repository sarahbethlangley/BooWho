/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        spooky: "#240263",
        creepy: "#443166",
        pow: "#fa02f2",
        bubblegum: "#f5aef3",
        yeller: "#F5FE87",
      },

      fontFamily: {
        cutive: ["Cutive Mono", "serif"],
        zilla: ["Zilla Slab Highlight", "cursive"],
        unbounded: ["Unbounded", "cursive"],
        sigmar: ["Sigmar One", "cursive"],
        christmas: ["Mountains of Christmas", "cursive"],
        kranky: ["Kranky", "cursive"],
        henny: ["Henny Penny", "cursive"],
        firjole: ["Firjole", "cursive"],
        fascinate: ["Fascinate Inline", "cursive"],
        della: ["Della Respira", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), "@tailwindcss/aspect-ratio"],
};
