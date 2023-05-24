export function formatCardDate(dateString) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Вспомогательная функция для получения номера недели в месяце
  function getWeekOfMonth(date) {
    // Получаем первый день месяца
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    // Определяем номер дня недели для первого дня месяца; приводим воскресенье к значению 7
    const firstDayOfWeek = firstDayOfMonth.getDay() || 7;
    // Вычисляем количество дней в первой неделе
    const daysInFirstWeek = 8 - firstDayOfWeek;

    // Получаем номер дня месяца
    const dayOfMonth = date.getDate();
    let weekOfMonth;

    // Проверяем, находится ли день месяца в первой неделе
    if (dayOfMonth <= daysInFirstWeek) {
      // День находится в первой неделе
      weekOfMonth = 1;
    } else {
      // День находится в последующих неделях
      // Вычисляем количество полных недель, прошедших после первой недели
      weekOfMonth = Math.ceil((dayOfMonth - daysInFirstWeek) / 7) + 1;
    }

    return weekOfMonth;
  }

  // Разбиваем строку даты по точке; преобразуем каждую часть в числовое значение
  const [day, month, year] = dateString
    .split(".")
    .map((part) => parseInt(part, 10));

  const date = new Date(year, month - 1, day);

  const weekOfMonth = getWeekOfMonth(date);

  const formattedDate = `${weekdays[date.getDay()]}, ${weekOfMonth} week of ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;

  return formattedDate;
}
