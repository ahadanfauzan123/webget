/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      colors: {
        'theme': 'var(--background)',
        'themeSecondary' : 'var(--background-secondary)',
        'color': 'var(--t-color-theme)',
        'bgCard': 'var(--background-card)',
        'bgNav' : 'var(--nav-bg-primary)',
        'bgNavSec' : 'var(--nav-bg-secondary)',
        'btColor' : 'var(--button-color)',
        // 'themeSecondary': 'var(--background-secondary)',
        // 'cardTheme': 'var(--card-background)',
        // 'colorProduct': 'var(--t-color-product)',
        // 'inputTheme': 'var(--input-theme)',
        // 'colorInput': 'var(--t-input-color-theme)',
        // 'barTheme': 'var(--bar-background)',
        // 'navTheme': 'var(--nav-background)',
        // 'lcolor': 'var(--t-label-color)',
      }
    },
    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '675px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
