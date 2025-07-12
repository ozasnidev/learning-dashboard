export default function StatCard({ label, value, icon }) {
  return (
    <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md transition-colors">
      <div className="text-slate-500 dark:text-slate-400 text-sm mb-1">
        {icon && <span className="mr-1">{icon}</span>} {label}
      </div>
      <div className="text-3xl font-bold text-slate-900 dark:text-white">
        {value}
      </div>
    </div>
  );
}