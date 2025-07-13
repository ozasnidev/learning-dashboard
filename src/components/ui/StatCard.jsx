// /ui/StatCard.jsx

export default function StatCard({ label, value, iconPath }) {
  return (
    <div className="flex h-[5rem] bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
      
      <div className="w-1/4 flex items-center justify-center">
        <img
          src={iconPath}
          alt={label}
          className="w-10 h-10 invert-0 dark:invert"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col flex-grow h-full">
        <div className="basis-[40%] flex items-center px-4 text-sm text-slate-500 dark:text-slate-400">
          {label}
        </div>
        <div className="basis-[60%] flex justify-end items-center px-4 text-3xl font-bold text-slate-900 dark:text-white">
          {value}
        </div>
      </div>
    </div>
  );
}