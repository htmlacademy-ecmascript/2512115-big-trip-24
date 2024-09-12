import dayjs from 'dayjs';

const TIME_FORMAT = 'HH:mm';
const DATE_FORMAT = 'MMM DD';

function humanizePointDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function humanizePointDueTime(dueTime) {
  return dueTime ? dayjs(dueTime).format(TIME_FORMAT) : '';
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export {getRandomArrayElement, humanizePointDueDate, humanizePointDueTime};
