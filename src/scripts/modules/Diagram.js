import {
  numberOfWeek,
  dayOfWeek,
} from '../constants/constants';

class Diagram {
  constructor(dates, rays) {
    this.dates = dates;
    this.rays = rays;
  }

  showDates(dates, rays) {
    dates.style.display = 'flex';
    for (let i = 0; i < dayOfWeek.length; i++) {
      const date = document.createElement('div');
      date.classList.add('diagram__date');
      date.textContent = `${numberOfWeek[i]},${dayOfWeek[i]}`;
      dates.appendChild(date);
    }
    rays.style.display = 'flex';
    numberOfWeek.forEach((el) => {
      const ray = document.createElement('div');
      const percent = document.createElement('div');
      percent.classList.add('diagram__percent');
      ray.classList.add('diagram__ray');
      ray.appendChild(percent);
      rays.appendChild(ray);

      if (localStorage.getItem(`ray${el}`) < 2) {
        percent.style.display = 'none';
      } else {
        percent.textContent = localStorage.getItem(`ray${el}`);
      }

      if (!(localStorage.getItem(`ray${el}`))) {
        ray.style.width = 0;
      } else {
        ray.style.width = `${localStorage.getItem(`ray${el}`)}%`;
      }
    });
  }
}

export default Diagram;
