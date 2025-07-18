/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        earth: {
          50: '#FAF7F0',
          100: '#F5F0E8',
          200: '#E8DCC6',
          300: '#D4C5A9',
          400: '#B8A082',
          500: '#9C7C5C',
          600: '#8B4513',
          700: '#73350F',
          800: '#5C2A0C',
          900: '#4A220A',
        },
        sage: {
          50: '#F7F9F7',
          100: '#EEF3EE',
          200: '#D6E3D6',
          300: '#BDD3BD',
          400: '#9CAF88',
          500: '#7A8B6E',
          600: '#6B7A60',
          700: '#5A6651',
          800: '#4A5342',
          900: '#3D4437',
        },
        cream: {
          50: '#FEFEFE',
          100: '#FDFDFD',
          200: '#F9F9F7',
          300: '#F5F5DC',
          400: '#F0F0C8',
          500: '#EBEBAB',
          600: '#E6E68E',
          700: '#D4D470',
          800: '#C2C252',
          900: '#B0B034',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};