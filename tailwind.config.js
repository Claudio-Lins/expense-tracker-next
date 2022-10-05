/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        texto: "#5e6066",
        income: "#7f60f3",
        outcome: "#f36060",
        sidebar: "#f5f5f5",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/forms")],
};
