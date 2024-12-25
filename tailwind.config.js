/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./layout/**/*.{js,jsx}",
    "./layouts/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-cyan": "#02b3c0",
        "theme-dark-cyan": "#01858c",
      },
    },
  },
  plugins: [],
};
