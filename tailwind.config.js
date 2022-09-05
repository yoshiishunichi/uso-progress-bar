/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      transitionProperty: {
        bg: "background",
      },
    },
  },
};