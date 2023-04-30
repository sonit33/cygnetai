/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   "pastel-pink": "#FFD1DC",
    //   "pastel-blue": "#CCE0F0",
    //   "pastel-yellow": "#FFF4CC",
    //   "pastel-green": "#C9F1CA",
    //   "pastel-purple": "#D9CCF0",
    //   "pastel-orange": "#FFE4CC",
    //   "light-gray": "#D3D3D3",
    //   "dark-gray": "#5C5C5C",
    //   white: "#FFFFFF",
    //   "dark-pink": "#B35A6A",
    //   "dark-blue": "#597F9D",
    //   "dark-yellow": "#B3A12C",
    //   "dark-green": "#529963",
    //   "dark-purple": "#665A9D",
    //   "dark-orange": "#B36B2C",
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
