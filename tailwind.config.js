/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      light: "#F8F9FA",
      dark: "#1E1E1E",
    },
    extend: {
      animation: {
        marquee: "marquee 5s linear infinite",
        marquee2: "marquee2 5s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      fontFamily: {
        josefinSans: ["Josefin Sans", "ui-sans-serif", "system-ui"],
        livvic: ["Livvic", "ui-sans-serif", "system-ui"],
        satoshi: ["Satoshi", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
