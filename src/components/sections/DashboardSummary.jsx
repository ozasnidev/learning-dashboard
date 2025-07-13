// /components/sections/DashboardSummary.jsx

import StatCard from '../ui/StatCard';

export default function DashboardSummary() {
  const stats = [
    { label: 'Tareas completadas', value: '7', iconPath: './src/images/svg/completed-task.svg' },
    { label: 'Tareas pendientes', value: '14', iconPath: './src/images/svg/pending-task.svg' },
    { label: 'Completed Checkpoints', value: '3', iconPath: './src/images/svg/completed-checkpoint.svg' },
    { label: 'Notes', value: '2', iconPath: './src/images/svg/notes.svg' },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="animate-slide-up"
            style={{
              animationDelay: `${idx * 100}ms`,
              animationFillMode: 'forwards',
            }}
          >
            <StatCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}