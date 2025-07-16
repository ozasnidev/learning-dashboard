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
        const isSunday = dateObj.getDay() === 0;

        const events =
        isCurrent && !isSunday && dateObj.getDate() % 5 === 0
            ? [
                { title: 'Reunión dev', color: 'blue' },
                { title: 'Deadline cliente', color: 'red' },
            ]
            : [];

        week.push({
        date: dateObj.getDate(),
        current: isCurrent,
        events,
        isSunday,
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
  const [showToast, setShowToast] = useState(false);

  const baseDate = new Date(2025, 6); // Julio 2025
  const shownDate = new Date(baseDate.getFullYear(), baseDate.getMonth() + monthOffset);
  const { currentMonth, daysMatrix } = getMonthMatrix(shownDate.getFullYear(), shownDate.getMonth());

  function triggerToast() {
  setShowToast(true);
  setTimeout(() => setShowToast(false), 3000); // se oculta tras 3 seg
}

  return (
    <section className="max-w-8xl mx-auto">
      {/* Encabezado de mes */}
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold dark:text-slate-900 text-white">{currentMonth}</h2>
        <div className="space-x-2">
          <button onClick={() => setMonthOffset((prev) => prev - 1)} className="px-3 py-1 dark:bg-slate-200 bg-slate-700 rounded">←</button>
          <button onClick={() => setMonthOffset((prev) => prev + 1)} className="px-3 py-1 dark:bg-slate-200 bg-slate-700 rounded">→</button>
        </div>
      </header>

      {/* Días de la semana */}
      <div className="grid grid-cols-7 mb-1 text-center text-sm font-medium text-slate-300 dark:text-slate-600">
        {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((dia, idx) => (
          <div key={idx}>{dia}</div>
        ))}
      </div>

      {/* Celdas del mes */}
      <div className="grid grid-cols-7 gap-px h-[600px] bg-slate-200 dark:bg-slate-700 rounded overflow-hidden">
        {daysMatrix.flat().map((day, idx) => (
          <div
            key={`${day.date}-${idx}`}
            onClick={() =>{ if (!day.current) return; if(day.isSunday){ triggerToast(); return;} setSelectedDay(day) }}
            className={`flex flex-col justify-between bg-white dark:bg-slate-900 ring-blue-400 transition
                min-h-[100px] h-full p-2 relative text-slate-800 dark:text-white
                ${day.isSunday ? 'bg-red-100' : 'bg-white dark:bg-slate-900'}
                ${day.current ? 'hover:ring-2 ring-blue-400' : ''}
                ${day.current ? '' : 'opacity-50'} 
                ${day.current ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            >
            {/* Número del día */}
                <div className="text-right text-xs font-bold">{day.date}</div>
                {/* Eventos mostrados */}
                <div className="flex flex-col gap-1 mt-2">
                    {day.events.slice(0, 2).map((ev, i) => (
                    <div
                        key={i}
                        className={`text-xs rounded px-2 py-1 truncate text-white font-medium
                        ${ev.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`}
                    >
                        {ev.title}
                    </div>
                    ))}
                    {/* Indicador "+N más" si hay más de 2 eventos */}
                    {day.events.length > 2 && (
                    <div className="text-xs text-slate-500 dark:text-slate-400 italic ml-1">
                        +{day.events.length - 2} más
                    </div>
                    )}
                </div>
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
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-red-600 dark:bg-red-900 text-white px-4 py-2 rounded shadow-lg 
            animate-slide-up text-sm z-50">
            El domingo no es día de actividad. No se puede registrar evento.
        </div>
    )}
    </section>
  );
}