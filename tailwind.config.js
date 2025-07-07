/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 Habilita el modo oscuro
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // 👈 Escanea todas tus rutas Astro y JSX
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};

