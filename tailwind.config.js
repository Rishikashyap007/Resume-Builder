/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      addUtilities({
        '.list-disc-bold': {
          'list-style-type': 'disc',
          'color': '#000',
          // Optional: You can use a pseudo-element to make the bullet bold
          // Uncomment the lines below if you need to customize the bullet
          '&::marker': {
            'font-weight': 'bold',
            'color':"black"
          },
        },
        '.list-decimal-custom': {
          'list-style-type': 'decimal',
          'color': '#000',
        },
      }, ['responsive', 'hover']);
    }
  ],
}
