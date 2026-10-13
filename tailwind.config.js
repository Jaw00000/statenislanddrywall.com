/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0D0D0D',
          900: '#161616',
          800: '#1C1C1C',
          700: '#242424',
          600: '#2E2E2E',
          500: '#3A3A3A',
        },
        champagne: {
          50: '#FBF7EF',
          100: '#F5EDDB',
          200: '#EBD9B8',
          300: '#DCC58F',
          400: '#C9AC63',
          500: '#B8945A',
          600: '#A07E4A',
          700: '#836A3E',
          800: '#6B5635',
          900: '#56452C',
        },
        steel: {
          50: '#F0F2F5',
          100: '#E1E5EB',
          200: '#C2C9D4',
          300: '#9BA5B5',
          400: '#727F94',
          500: '#56617A',
          600: '#414B61',
          700: '#333B4E',
          800: '#262C3B',
          900: '#1A1E29',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 172, 99, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201, 172, 99, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
