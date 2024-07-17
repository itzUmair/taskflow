import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#202025",
        "primary-light": "#F6F7FF",
        "primary-accent-dark": "#3C3C4F",
        "primary-accent-light": "#D9D9D9",
        "secondary-accent": "#5E5E6B",
        "primary-text-light": "#000000",
        "primary-text-dark": "#FFFFFF",
        "secondary-accent-red": "#C62424",
        "secondary-accent-yellow": "#BBA114",
        "secondary-accent-green": "#4DBB3B",
      },
    },
  },
  plugins: [],
};
export default config;
