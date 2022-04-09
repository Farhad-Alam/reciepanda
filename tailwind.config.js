module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair Display", "serif"],
        pociFico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
