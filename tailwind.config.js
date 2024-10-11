/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Mango-Grotesque": ["Mango Grotesque", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
