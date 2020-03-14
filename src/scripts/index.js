import '../styles/index.css';
import {
  period,
  searchButton,
  container,
  moreButton,
} from './constants/constants';
import {
  loader,
} from './utils/loader';
import NewCards from './modules/NewCard';
import SearchButton from './components/SearchButton';
import MoreButton from './components/MoreButton';
import NewsApi from './modules/NewsApi';

const search = new SearchButton(searchButton);
const more = new MoreButton(moreButton);
const api = new NewsApi('everything', period, 'relevancy', 100);
const newCard = new NewCards();

searchButton.addEventListener('click', () => {
  search.click();
});

moreButton.addEventListener('click', () => {
  more.click();
});

if (localStorage.getItem('n')) {
  newCard.createCard(container);
  loader.showResults();
}

export {
  newCard,
  api,
};
