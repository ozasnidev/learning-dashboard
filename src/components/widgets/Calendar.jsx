import { useState } from 'react';

function getMonthMatrix(year, month) {
  const currentDate = new Date(year, month);
  const currentMonth = currentDate.toLocaleString('es-ES', {
    month: 'long',
    year: 'numeric',
  });

  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7;

  const matrix = [];
  let dayCounter = 1 - startOffset;

  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const dateObj = new Date(year, month, dayCounter);
      const isCurrent = dateObj.getMonth() === month;

      const events =
        isCurrent && dateObj.getDate() % 5 === 0
          ? [
              { title: 'Reunión dev', color: 'blue' },
              { title: 'Deadline cliente', color: 'red' },
            ]
          : [];

      week.push({
        date: dateObj.getDate(),
        current: isCurrent,
        events,
      });

      dayCounter++;
    }
    matrix.push(week);
  }

  return {
    currentMonth: currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1),
    daysMatrix: matrix,
  };
}

export default function CalendarPage() {
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);

  const baseDate = new Date(2025, 6); // Julio 2025
  const shownDate = new Date(baseDate.getFullYear(), baseDate.getMonth() + monthOffset);
  const { currentMonth, daysMatrix } = getMonthMatrix(shownDate.getFullYear(), shownDate.getMonth());

  return (
    <section className="max-w-6xl mx-auto">
      {/* Encabezado de mes */}
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold dark:text-slate-900 text-white">{currentMonth}</h2>
        <div className="space-x-2">
          <button onClick={() => setMonthOffset((prev) => prev - 1)} className="px-3 py-1 dark:bg-slate-200 bg-slate-700 rounded">←</button>
          <button onClick={() => setMonthOffset((prev) => prev + 1)} className="px-3 py-1 dark:bg-slate-200 bg-slate-700 rounded">→</button>
        </div>
      </header>

      {/* Días de la semana */}
      <div className="grid grid-cols-7 mb-1 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
        {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((dia, idx) => (
          <div key={idx}>{dia}</div>
        ))}
      </div>

      {/* Celdas del mes */}
      <div className="grid grid-cols-7 gap-px h-[600px] bg-slate-200 dark:bg-slate-700 rounded overflow-hidden">
        {daysMatrix.flat().map((day, idx) => (
          <div
            key={`${day.date}-${idx}`}
            onClick={() => setSelectedDay(day)}
            className={`bg-white dark:bg-slate-900 cursor-pointer hover:ring-2 ring-blue-400 transition
              min-h-[100px] h-full p-2 relative text-slate-800 dark:text-white ${day.current ? '' : 'opacity-50'}`}
          >
            <span className="absolute top-2 right-2 text-xs font-bold">{day.date}</span>
            {day.events.map((ev, i) => (
              <div
                key={i}
                className={`mt-6 text-xs rounded px-2 py-1 truncate text-white font-medium
                  ${ev.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`}
              >
                {ev.title}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedDay && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="dark:bg-white bg-slate-800 p-6 rounded-xl shadow-xl max-w-sm w-full">
            <h3 className="text-lg font-bold mb-2">Eventos del día {selectedDay.date}</h3>
            {selectedDay.events.length === 0 ? (
              <p className="text-sm text-slate-500">No hay eventos</p>
            ) : (
              <ul className="space-y-2">
                {selectedDay.events.map((ev, i) => (
                  <li
                    key={i}
                    className={`px-2 py-1 rounded text-white font-medium
                      ${ev.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`}
                  >
                    {ev.title}
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => setSelectedDay(null)}
              className="mt-4 px-3 py-1 dark:bg-slate-300 bg-slate-700 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}