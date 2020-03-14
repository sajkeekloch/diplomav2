import {
  loader,
} from '../utils/loader';
import {
  newsCounter,
} from '../modules/NewsApi';
import {
  newCard,
  api,
} from '../index';
import {
  container,
  input,
} from '../constants/constants';

class SearchButton {
  click() {
    loader.showLoader();
    newCard.removeCards(container);
    newsCounter.reset();
    localStorage.clear();
    api.getNews(input.value);
  }
}

export default SearchButton;
