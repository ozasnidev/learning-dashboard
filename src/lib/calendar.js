export function getMonthMatrix() {
  const year = 2025;
  const month = 6; // julio (0-indexed)
  const monthName = 'Julio 2025'; // sin toLocaleString

  const firstDayOfMonth = new Date(year, month, 1);
  const startOffset = (firstDayOfMonth.getDay() + 6) % 7;

  const matrix = [];
  let dayCounter = 1 - startOffset;

  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const currentDate = new Date(year, month, dayCounter);
      const isThisMonth = currentDate.getMonth() === month;

      const events =
        isThisMonth && currentDate.getDate() % 5 === 0
          ? [
              { title: 'Reunión dev', color: 'blue' },
              { title: 'Deadline cliente', color: 'red' }
            ]
          : [];

      week.push({
        date: currentDate.getDate(),
        current: isThisMonth,
        events
      });

      dayCounter++;
    }
    matrix.push(week);
  }

  return {
    currentMonth: monthName,
    daysMatrix: matrix
  };
}