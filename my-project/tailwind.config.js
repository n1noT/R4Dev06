/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        clrBg : 'hsl(var(--background))',
        'clr-bg' : 'hsl(var(--background))',
        'clr-bg' : 'hsl(var(--background))',
        
      },
      
    },
  },
  plugins: [],
}