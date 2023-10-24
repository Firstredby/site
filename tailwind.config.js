/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      width: {
        "1/10": "10%",
        "1.5/10": "15%",
        "2/10": "20%",
      },
      height: {
        "1/10": "10%",
      },
      scale: {
        200: "2",
        300: "3",
      },
    },
  },
  plugins: [],
};
