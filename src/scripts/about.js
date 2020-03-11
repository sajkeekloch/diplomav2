import '../styles/about.css';
import './swiper';
import RenderCards from './modules/RenderCardsAbout';
import {containerGit} from './constants/constants';

const renderCards = new RenderCards();

class GitApi {
  constructor () {
      this.url = 'https://api.github.com/repos/sajkeekloch/diplomav2/commits';
  }

  getResponse(res) {
    if (res.ok) {
        return res.json()
    }
    else return Promise.reject(res.status);
    
}

  recordSessionStorage(res) {
    for (let i = 0; i < res.length; i++) { 
      sessionStorage.setItem(`commit${i}`, JSON.stringify(res[i]));
      }  
      renderCards.render(containerGit);
  }

  getCommits() {
      fetch(this.url)
      .then(res => this.getResponse(res))
      .then(res => this.recordSessionStorage(res))
      .catch(res => {
        document.getElementById('swiper').style.display = 'none';
      });
  }
} 

const gitApi = new GitApi;
gitApi.getCommits();