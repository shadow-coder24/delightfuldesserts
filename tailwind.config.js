import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'pinksoft' : '#ff8fdd',
        'pinkpale': '#fadadd',
        'yellowmuted': '#D2B450',
        'browndark': '#3e140d'
      },
      display: ["group-hover"],
      backgroundImage: {
        'cake': "url('/subcategoryimage/layercake.jpg')"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
