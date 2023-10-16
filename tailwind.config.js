/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        impact: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
      },
      width: {
        vw50: "50vw",
        vw90: "90vw",
      },
      height: {
        vh80: "80vh",
        vh10: "10vh",
      },
    },
  },
  plugins: [],
};
