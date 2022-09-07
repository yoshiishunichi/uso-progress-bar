/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        bar: {
          dark: "#e8e9e8",
          thin: "#f9faf9",
        },
        close: "#f25f57",
        frosted: "rgba(255, 255, 255, 0.75)",
        header: {
          dark: "#a7a8a8",
          thin: "#cececd",
        },
      },
      fontFamily: {
        noto: ["Noto Sans JP", "sans-serif"],
      },
      transitionProperty: {
        bg: "background",
      },
    },
  },
};
