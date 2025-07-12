import { useEffect } from 'react';

export default function Sidebar({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <aside
      className={`top-0 left-0 h-screen w-64 bg-slate-800 p-6 transition-transform duration-300 z-40
        fixed md:static dark:bg-white dark:text-slate-800
        ${isOpen ? 'translate-x-0 md:translate-x-0' : '-translate-x-full md:translate-x-0'}`}
    >
      <div className="md:hidden flex justify-end mb-4">
        <button onClick={onClose} className="text-white hover:text-red-400">
          <svg
            className="h-6 w-6 text-white dark:text-slate-800 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <h1 className="text-xl font-bold mb-8">Learning</h1>
      <nav className="space-y-4">
        <a href="/" className="block hover:text-cyan-400">📊 Summary</a>
        <a href="/calendar" className="block hover:text-cyan-400">🗓️ Calendar</a>
        <a href="/checkpoints" className="block hover:text-cyan-400">✅ Checkpoints</a>
        <a href="/notes" className="block hover:text-cyan-400">📝 Notes</a>
      </nav>
    </aside>
  );
}