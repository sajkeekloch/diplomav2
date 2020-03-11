import {
    numberOfWeek, period, searchButton, input, container, moreButton,
  } from '../constants/constants';
import { counter } from '../utils/counter';
import { loader } from '../utils/loader';
import { formatDateForRay } from '../utils/formatDate';
import { newCard } from '../index';

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
  
    resetSessionStorage() {
      sessionStorage.clear();
    }
  
    _recordDataForAnatitycs(res, word) {
      sessionStorage.setItem('word', word);
      sessionStorage.setItem('totalRes', res.totalResults);
      let counter = 0;
      let title = 0;
      numberOfWeek.forEach((el) => {
        for (let i = 0; i < res.articles.length; i++) {
          if (formatDateForRay(new Date(res.articles[i].publishedAt)) === el) {
            if (res.articles[i].title.match(new RegExp(input.value, 'gi'))) {
              counter++;
              title++;
              sessionStorage.setItem(`ray${el}`, counter);
            } else if (res.articles[i].description.match(new RegExp(input.value, 'gi'))) {
              counter++;
              sessionStorage.setItem(`ray${el}`, counter);
            }
          }
        }
        counter = 0;
      });
      sessionStorage.setItem('inTitles', title);
    }
  
    _redcordSessionStorage(res) {
      if (res.length === 0) {
        return Promise.reject();
      }
  
      for (let i = 0; i < res.length; i++) {
        sessionStorage.setItem(`item${i}`, JSON.stringify(res[i]));
      }
      counter.add();
      counter.setTotal(res.length);
      newCard.createCard(container);
    }
  
    getNews(word) {
      sessionStorage.setItem('word', word);
      event.preventDefault();
      fetch(`${this.url + this.topHeadlines}?` + `q=${word}&${period}${this.sort}&${this.pageSize}`, {
        method: 'GET',
        headers: {
          Authorization: this.key,
        },
      })
        .then((res) => this._getResponse(res))
        .then((res) => {
          this._recordDataForAnatitycs(res, word);
          return res;
        })
        .then((res) => this._redcordSessionStorage(res.articles))
        .then(() => {
          loader.showResults();
        })
        .catch(() => {
          loader.notFound();
        });
    }
  }
  

export default NewsApi;