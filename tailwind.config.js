const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-primary': '#E73626',
        'red-secondary': '#FDEFEE',
        'red-tertiary': '#8D2319',
        
        'grey-text': '#E0E0E0',
        'grey-placeholder': '#455A64',
  
        'grey-darker': '#D6D5D5',
        'black-lighter': '#a6a6a6'
      },
      fontFamily: {
        'sans': ['Recursive', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
