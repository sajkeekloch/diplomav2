import {
  input,
  numberOfWeek,
} from '../constants/constants';
import {
  formatDateForRay,
} from '../utils/formatDate';

class DataRecorder {

  record(res) {
    localStorage.setItem('totalRes', res.totalResults);
    let matchCounter = 0;
    let matchTitle = 0;
    let regExp = new RegExp(input.value, 'gi');
    numberOfWeek.forEach((el) => {
      for (let i = 0; i < res.articles.length; i++) {
        if (formatDateForRay(new Date(res.articles[i].publishedAt)) === el) {
          if (res.articles[i].title.match(regExp)) {
            matchCounter++;
            matchTitle++;
            localStorage.setItem(`ray${el}`, matchCounter);
          } else if (res.articles[i].description.match(regExp)) {
            matchCounter++;
            localStorage.setItem(`ray${el}`, matchCounter);
          }
        }
      }
      matchCounter = 0;
    });
    localStorage.setItem('inTitles', matchTitle);
  }
}

export default DataRecorder;
