/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
    fontFamily: {
      Cabin: ["Cabin", "sans-serif"],
      Roboto: ["Roboto Condensed", "sans-serif"],
      Playfair: ["Playfair Display", "serif"],
      pix: ["Pixelify Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
