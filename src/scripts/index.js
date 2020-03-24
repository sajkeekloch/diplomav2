import '../styles/index.css';
import {
  period,
  searchButton,
  container,
  moreButton,
  input,
} from './constants/constants';
import {
  loader,
} from './utils/loader';
import NewCards from './modules/NewCards';
import SearchButton from './components/SearchButton';
import MoreButton from './components/MoreButton';
import NewsApi from './modules/NewsApi';
import Validation from './utils/Validation';

const search = new SearchButton(searchButton, container);
const more = new MoreButton(container);
const api = new NewsApi('everything', period, 'relevancy', 100);
const newCard = new NewCards(container);

input.addEventListener('input', function(){
  const validator = new Validation(input.value);
  validator.check();
})

searchButton.addEventListener('click', () => {
  search.disabled();
  input.setAttribute('disabled', 'true');
  input.style.backgroundColor = '#fff';
  search.click();
});

moreButton.addEventListener('click', () => {
  more.click();
});

if (localStorage.getItem('n')) {
  newCard.createCard(container);
  loader.showResults();
}   

if (localStorage.getItem('word')) {
  input.value = localStorage.getItem('word');
  search.enabled();
} 

export {
  newCard,
  api,
  search,
};
