/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist:["bg-neutral-500", "bg-button-bg", "bg-button-hover"],
  theme: {
    extend: {
      colors:{
        'button-bg' : "var(--button-bg)",
        'button-text' : "var(--button-text)",
        'button-hover' : "var(--button-link-hover)"
      },
      fontFamily:{
        'button': 'var(--ff)'
      },
      fontFamily:{
        'button': 'var(--ff)'
      },
    },
  },
  plugins: [],
};
