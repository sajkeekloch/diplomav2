function formatDate(date) {
  const monthNames = [
    'Января', 'Февраля', 'Марта',
    'Апреля', 'Мая', 'Июня', 'Июля',
    'Августа', 'Сентября', 'Октября',
    'Ноября', 'Декабря',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();

  return `${day} ${monthNames[monthIndex]}`;
}

function formatDateForRequest(date) {
  let day = date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let mounth = date.getMonth() + 1;
  if (mounth < 10) {
    mounth = `0${mounth}`;
  }
  const year = date.getFullYear();

  return `${year}-${mounth}-${day}`;
}

function formatDateDayOfWeek(date) {
  const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  return days[date.getDay()];
}

function formatDateForRay(date) {
  const day = date.getDate();

  return day;
}

export {
  formatDate,
  formatDateForRequest,
  formatDateDayOfWeek,
  formatDateForRay,
};
