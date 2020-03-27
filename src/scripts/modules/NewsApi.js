import {
  period,
  container,
  input,
} from '../constants/constants';
import {
  loader,
} from '../utils/loader';
import {
  newCard, search,
} from '../index';
import LocalStorageRecorder from './LocalStorageRecorder';
import DataRecorder from './AnalyticsDataRecorder';

const localStorageRecorder = new LocalStorageRecorder();
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
        if (res.articles.length === 0) {
          return Promise.reject();
        }
        localStorageRecorder.redcordLocalStorage(res.articles)
        return res;
      })
      .then((res) => {
        recorder.record(res);
      })
      .then(() => {
        newCard.createCard();
      })
      .then(() => {
        loader.showResults();
      })
      .then(() => {
        search.enabled();
        input.removeAttribute('disabled');
      })
      .catch(() => {
        search.enabled();
        input.removeAttribute('disabled');
        loader.notFound();
      });
  }
}

export default NewsApi;
