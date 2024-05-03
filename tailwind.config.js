/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        josefinSans: ["Josefin Sans", "ui-sans-serif", "system-ui"],
        livvic: ["Livvic", "ui-sans-serif", "system-ui"],
        satoshi: ["Satoshi", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
