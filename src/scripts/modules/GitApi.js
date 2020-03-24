import { mySwiper } from '../swiper';
import GitCards from './GitCards';
import {
  containerGit,
} from '../constants/constants';

const gitCards = new GitCards();
document.getElementById('swiper').style.display = 'none';

class GitApi {
  constructor() {
    this.url = 'https://api.github.com/repos/sajkeekloch/diplomav2/commits';
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    } return Promise.reject(res.status);
  }

  _recordLocalStorage(res) {
    for (let i = 0; i < res.length; i++) {
      localStorage.setItem(`commit${i}`, JSON.stringify(res[i]));
    }
  }

  getCommits() {
    fetch(this.url)
      .then((res) => this._getResponse(res))
      .then((res) => this._recordLocalStorage(res))
      .then(() => {
        gitCards.render(containerGit);
      })
      .then(() => {
        document.getElementById('swiper').style.display = 'block';  
      })
      .then(() => {
        setTimeout(function () {
          mySwiper.update();
         }, 1000);
      })
      .catch(() => {
        document.getElementById('swiper').style.display = 'none';
      });
  }
}

export default GitApi;
