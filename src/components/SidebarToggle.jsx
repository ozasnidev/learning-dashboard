import { useState } from 'react';
import Sidebar from './Sidebar.jsx';

export default function SidebarToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa solo en móvil */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden fixed top-4 left-4 z-[9999] bg-slate-700 text-white p-2 rounded hover:bg-slate-600"
          aria-label="Abrir menú"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      {/* Overlay solo para móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar solo en móvil */}
      <div className="md:hidden">
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
}