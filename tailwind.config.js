/** @type {import('tailwindcss').Config} */
export default {
  content: ["./bonus-guide.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 20px 60px -24px rgba(15, 23, 42, 0.18)"
      },
      colors: {
        ink: "#0f172a",
        paper: "#fffdf8",
        accent: "#ea580c",
        calm: "#0f766e"
      }
    }
  },
  plugins: []
};
