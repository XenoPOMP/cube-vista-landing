/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './app/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#483E97',
        secondary: '#282252',
        'bg-base': '#FFFFFF',
        'font-light': '#FFFFFF',
        'font-dark': '#000000',
        'btn-primary': '#FC8B94',
        'btn-secondary': '#FFFFFF',
        'footer-primary': '#000000',
        'footer-secondary': '#FFFFFF',
        'footer-btn-bg': '#191919',
        'footer-btn-font': '#E6E6E6',
        'subfooter-primary': '#87DB1C',
        'subfooter-secondary': '#000000',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
