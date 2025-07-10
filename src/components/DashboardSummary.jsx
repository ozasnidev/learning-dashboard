import StatCard from './StatCard.jsx';

export default function DashboardSummary() {
  const stats = [
    { label: 'Tareas completadas', value: '7', icon: '✅' },
    { label: 'Notas guardadas', value: '14', icon: '📝' },
    { label: 'Ideas pendientes', value: '3', icon: '💡' },
    { label: 'Cafés tomados', value: '…insuficientes', icon: '☕' },
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
  )
}