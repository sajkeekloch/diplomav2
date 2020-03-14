import {
  period,
  container,
} from '../constants/constants';
import Counter from '../utils/Counter';
import {
  loader,
} from '../utils/loader';
import {
  newCard,
} from '../index';
import DataRecorder from './AnalyticsDataRecorder';

const newsCounter = new Counter();
const recorder = new DataRecorder();

class NewsApi {
  constructor(topHeadlines, period, sort, pageSize) {
    this.key = '96993b7e8b544c65994eeab4f832ddea';
    this.url = 'https://newsapi.org/v2/';
    this.topHeadlines = topHeadlines;
    this.period = period;
    this.sort = `sortBy=${sort}`;
    this.pageSize = `pageSize=${pageSize}`;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject();
  }

  _redcordLocalStorage(res) {
    if (res.length === 0) {
      return Promise.reject();
    }

    for (let i = 0; i < res.length; i++) {
      localStorage.setItem(`item${i}`, JSON.stringify(res[i]));
    }
    newsCounter.add();
    newsCounter.setTotal(res.length);
  }

  getNews(word) {
    localStorage.setItem('word', word);
    event.preventDefault();
    fetch(`${this.url + this.topHeadlines}?` + `q=${word}&${period}${this.sort}&${this.pageSize}`, {
      method: 'GET',
      headers: {
        Authorization: this.key,
      },
    })
      .then((res) => this._getResponse(res))
      .then((res) => {
        recorder.record(res);
        return res;
      })
      .then((res) => this._redcordLocalStorage(res.articles))
      .then(() => {
        loader.showResults();
      })
      .then(() => {
        newCard.createCard(container);
      })
      .catch(() => {
        loader.notFound();
      });
  }
}


export {
  newsCounter,
};
export default NewsApi;
