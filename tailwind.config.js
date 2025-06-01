/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        babyboomer: ['BabyBoomer', 'sans-serif'],
        rigraf: ['DXRigraf', 'sans-serif'],
      },
    },
  },
  darkMode: 'class', // Enable dark mode with a class
  plugins: [],
}
