import {
  formatDateDayOfWeek,
  formatDateForRequest,
} from '../utils/formatDate';

const containerGit = document.getElementById('container');
const searchButton = document.querySelector('.search__button');
const moreButton = document.querySelector('.results__button');
const input = document.querySelector('.search__input');
const container = document.querySelector('.results__container');
const n = 0;
const today = new Date();
const a = new Date();
a.setDate(today.getDate() - 6);
const aWeekAgo = new Date(a);
const period = `from=${formatDateForRequest(aWeekAgo)}&to=${formatDateForRequest(today)}&`;
const numberOfWeek = [];
const dayOfWeek = [];
for (let i = 0; i < 7; i++) {
  const day = new Date();
  const b = new Date(day.setDate(day.getDate() - i));
  dayOfWeek.unshift(formatDateDayOfWeek(b));
  numberOfWeek.unshift(b.getDate());
}

export {
  searchButton,
  moreButton,
  input,
  container,
  n,
  numberOfWeek,
  dayOfWeek,
  period,
  containerGit,
};
