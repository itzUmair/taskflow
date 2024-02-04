/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#202025",
        "primary-light": "#3C3C4F",
        "accent-gray": "#5E5E6B",
        "text-primary": "#FFFFFF",
        "accent-green": "#4DBB3B",
        "accent-yellow": "#BBA014",
        "accent-red": "#C62424",
      },
    },
  },
  plugins: [],
};
