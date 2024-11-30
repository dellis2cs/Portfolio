/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montreal: ['"PPNeueMontreal-Book"', "sans-serif"],
        montrealBold: ["PPNeueMontreal-Bold", "sans-serif"],
        montrealThin: ["PPNeueMontreal-Thin", "sans-serif"], // Add your custom font here
      },
    },
  },
  plugins: [],
};
