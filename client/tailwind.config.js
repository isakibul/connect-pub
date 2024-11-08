/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      rubik: ["Rubik"],
      righteous: ["Righteous"],
    },
    colors: {
      yellow: "#facc15",
      white: "#ffffff",
      amber: "#78350f",
      black: "#000000",
      gray: "#4b5540",
      stone: "#f5f5f4",
      cardFont: "#2e2d2d",
    },
  },
  plugins: [],
};
