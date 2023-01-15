/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.page.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/stories/*.stories.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#1f2937",
        secondary:"#f9fafb",
        tertiary:"#9ca3af",
      }
    },
  },
  plugins: [],
};
