/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 Habilita el modo oscuro
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // 👈 Escanea todas tus rutas Astro y JSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

