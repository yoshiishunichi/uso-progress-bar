/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        frosted: "rgba(255, 255, 255, 0.75)",
        header: {
          dark: "#a7a8a8",
          thin: "#cececd",
        },
      },
      transitionProperty: {
        bg: "background",
      },
    },
  },
};
