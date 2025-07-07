export default function DashboardGreeting() {
  const hour = new Date().getHours();

  let greeting = 'Hola';
  if (hour < 6) greeting = 'Buenas noches 🌙';
  else if (hour < 12) greeting = 'Buenos días ☀️';
  else if (hour < 19) greeting = 'Buenas tardes 🌇';
  else greeting = 'Buenas noches 🌙';

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-white dark:text-black transition-colors">
        {greeting}, Juan 👋
      </h2>
    </section>
  );
}