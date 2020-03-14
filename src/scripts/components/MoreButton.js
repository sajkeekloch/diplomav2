import {
  newCard,
} from '../index';
import {
  newsCounter,
} from '../modules/NewsApi';
import {
  container,
  moreButton,
} from '../constants/constants';

class MoreButton {
  click() {
    newCard.removeCards(container);
    newsCounter.add();
    newCard.createCard(container);
    if (JSON.parse(localStorage.getItem('n')) + 2 >= (JSON.parse(localStorage.getItem('t')))) {
      moreButton.style.display = 'none';
    }
  }
}

export default MoreButton;
