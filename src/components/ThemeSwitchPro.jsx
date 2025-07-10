import { useEffect, useState } from 'react';

export default function ThemeSwitchPro({ className }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', next);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={`group relative w-16 h-8 rounded-full p-[3px]
        transition-colors duration-500 ease-in-out ring-2 ring-transparent focus:ring-cyan-400 
        ${dark ? 'bg-cyan-500' : 'bg-gray-300'}`}
    >
      {/* Glow interno */}
      <div className={`absolute inset-0 rounded-full blur-sm opacity-25 pointer-events-none
        ${dark ? 'bg-cyan-400' : 'bg-yellow-300'}`} />

      {/* Deslizador */}
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md 
          transition-transform duration-500 ease-in-out transform 
          flex items-center justify-center text-lg
          group-active:scale-105
          ${dark ? 'translate-x-[36px]' : 'translate-x-0'}`}
      >
        {dark ? '☀️' : '🌙'}
      </div>
    </button>
  );
}