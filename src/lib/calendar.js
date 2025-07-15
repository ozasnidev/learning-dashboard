export function getMonthMatrix() {
  const today = new Date();
  const currentMonth = today.toLocaleString('es-ES', { month: 'long', year: 'numeric' });
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const startDay = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  const matrix = [];
  let dayCounter = 1 - startDay;

  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const dateObj = new Date(today.getFullYear(), today.getMonth(), dayCounter);
      const isCurrentMonth = dateObj.getMonth() === today.getMonth();
      const events = isCurrentMonth && dateObj.getDate() % 5 === 0
        ? [{ title: 'Reunión dev', color: 'blue' }, { title: 'Deadline cliente', color: 'red' }]
        : [];
      week.push({
        date: dateObj.getDate(),
        current: isCurrentMonth,
        events: events
      });
      dayCounter++;
    }
    matrix.push(week);
  }

  return {
    currentMonth: currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1),
    daysMatrix: matrix
  };
}