/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      border: "rgba(255, 255, 255, 0.2)",
      hover: "rgba(216, 216, 216, 0.2)",
    },
  },
  plugins: [],
};
