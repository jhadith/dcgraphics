/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111318",
        graphite: "#2C3038",
        paper: "#F8F7F4",
        line: "#E5E1DA",
        accent: "#F4D60C",
        gold: "#F8B733",
        highlight: "#F7E02C",
        navy: "#000042",
        royal: "#2D1785",
        cyan: "#0EA5B7",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(17, 19, 24, 0.12)",
      },
    },
  },
  plugins: [],
};
