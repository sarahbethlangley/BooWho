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
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
