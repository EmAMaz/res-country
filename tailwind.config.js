/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom: "rgba(0, 0, 0, 0.15)",
        darkBg: "rgb(32, 44, 55)",
        darkEl: "rgb(43, 57, 69)",
        darkText: "rgb(17, 21, 23)",
        darkInput: "rgb(133, 133, 133)",
        light: "rgba(255, 255, 255, 1)",
      },
      boxShadow: {
        lg: " 0px 2px 8px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
