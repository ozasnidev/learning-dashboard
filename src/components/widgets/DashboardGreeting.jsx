export default function DashboardGreeting({className}) {
  const hour = new Date().getHours();

  let greeting = 'Hola';
  if (hour < 6) greeting = 'Buenas noches 🌙';
  else if (hour < 12) greeting = 'Buenos días ☀️';
  else if (hour < 19) greeting = 'Buenas tardes 🌇';
  else greeting = 'Buenas noches 🌙';

  return (
    <section>
      <h2 className="text-3xl text-[1.2rem] text-gray-300 dark:text-gray-500">
        {greeting}, <b className="text-[1.4rem]">Juan</b>
      </h2>
    </section>
  );
}