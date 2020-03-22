import {
  loader,
} from '../utils/loader';
import {
  newsCounter,
} from '../modules/LocalStorageRecorder';
import {
  newCard,
  api,
} from '../index';
import {
  input,
} from '../constants/constants';

class SearchButton {

  constructor(button, container) {
    this.button = button;
    this.container = container;
    this.disabled();
  }

  click() {
    loader.showLoader();
    newCard.removeCards(this.container);
    newsCounter.reset();
    localStorage.clear();
    api.getNews(input.value);
  }

  disabled() {
    this.button.style.backgroundColor = 'grey';
    this.button.setAttribute('disabled', 'true');
    this.button.style.cursor = 'default';
  }

  enabled() {
    this.button.style.backgroundColor = '#2F71E5';
    this.button.onmouseover = function() {
      this.style.backgroundColor = '#347EFF';
    }
    this.button.onmouseout = function() {
      this.style.backgroundColor = '#2F71E5';
    }
    this.button.removeAttribute('disabled');
    this.button.style.cursor = 'pointer';

  }
}

export default SearchButton;
