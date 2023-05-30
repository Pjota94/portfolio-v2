/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["var(--roboto-font)"],
      bitter: ["var(--bitter-font)"],
    },
    colors: {
      gray: "#E7E1D7",
      black: "#050505",
    },
  },

  darkMode: "class",
  plugins: [],
};
