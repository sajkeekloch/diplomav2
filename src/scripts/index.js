import '../styles/index.css';
import {
  numberOfWeek, period, searchButton, input, container, moreButton,
} from './constants/constants';
import { loader } from './utils/loader';
import NewCardList from './modules/NewCard';
import SearchButton from './components/SearchButton';
import MoreButton from './components/MoreButton';
import NewsApi from './modules/NewsApi';

const search = new SearchButton(searchButton);
const more = new MoreButton(moreButton);
const api = new NewsApi('everything', period, 'relevancy', 100);
const newCard = new NewCardList();


searchButton.addEventListener('click', () => {
  search.click();
});

moreButton.addEventListener('click', () => {
  more.click();
});

if (sessionStorage.getItem('n')) {
  newCard.createCard(container);
  loader.showResults();
}

export { newCard, api };
