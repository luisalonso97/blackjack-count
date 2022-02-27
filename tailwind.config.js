module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'p-dark-navy': '#181D31',
        'p-teal': '#678983',
        'p-beige': '#E6DDC4',
        'p-beige-light': '#F0E9D2'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-5deg) scale(1)',
          },
          '50%': {
            transform: 'rotate(5deg) scale(1.2)',
          }
        }
      },
      animation: {
        wiggle: 'wiggle 750ms ease-in-out'
      }
    }
  },
  plugins: []
}
