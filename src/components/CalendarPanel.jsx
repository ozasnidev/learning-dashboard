import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

// Simulación de actividades por fecha
const actividadesPorFecha = {
  '2025-07-08': [
    { hora: '09:00', titulo: 'Reunión con el equipo', icono: '👥' },
    { hora: '13:30', titulo: 'Almuerzo con cliente', icono: '🍽️' },
  ],
  '2025-07-09': [
    { hora: '10:00', titulo: 'Revisión de código', icono: '🧪' },
    { hora: '17:00', titulo: 'Yoga en casa', icono: '🧘‍♂️' },
  ],
};

export default function CalendarPanel() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(
    new Date().toISOString().split('T')[0]
  );

  const actividades = actividadesPorFecha[fechaSeleccionada] || [];

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-slate-900 text-black dark:text-white rounded-lg transition-colors mt-6 mb-6">
      {/* CALENDARIO */}
      <div className="md:w-1/4 w-full">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          height="325px"
          events={Object.keys(actividadesPorFecha).map((fecha) => ({
            title: '●',
            date: fecha,
          }))}
          dateClick={(info) => setFechaSeleccionada(info.dateStr)}
          headerToolbar={false}
          dayMaxEvents={2}
          fixedWeekCount={false}
          contentHeight="{500}"
          dayHeaderClassNames={() =>
            'text-sm text-gray-600 dark:text-gray-300 font-medium py-1 border-b border-gray-200 dark:border-slate-700'
          }
          dayCellClassNames={({ date }) => {
            const isSelected = date.toISOString().split('T')[0] === fechaSeleccionada;
            const isToday = date.toDateString() === new Date().toDateString();
            return [
              'border border-gray-200 dark:border-slate-700 text-sm text-center p-2 cursor-pointer transition-colors',
              isToday && 'bg-slate-100 dark:bg-slate-800 font-semibold',
              isSelected && 'ring-2 ring-blue-500 dark:ring-blue-400',
              'hover:bg-slate-50 dark:hover:bg-slate-800',
            ].filter(Boolean).join(' ');
          }}
          eventClassNames={() =>
            'bg-blue-500 text-white rounded-full px-1 text-xs font-bold mx-auto mt-1 w-fit'
          }
        />
      </div>

      {/* ACTIVIDADES */}
      <div className="md:w-3/4 w-full">
        <h3 className="text-2xl font-bold mb-4">
          Actividades del {new Date(fechaSeleccionada).toLocaleDateString()}
        </h3>

        {actividades.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 italic">
            Sin actividades para este día.
          </p>
        ) : (
          <ul className="space-y-4">
            {actividades.map((act, idx) => (
              <li
                key={idx}
                className="flex items-start border border-gray-200 dark:border-slate-700 p-4 rounded-lg bg-gray-50 dark:bg-slate-800"
              >
                <div className="text-2xl mr-4">{act.icono}</div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{act.hora}</div>
                  <div className="text-lg font-medium">{act.titulo}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}