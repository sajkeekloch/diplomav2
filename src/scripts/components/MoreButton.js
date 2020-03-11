import { newCard } from '../index';
import { counter } from '../utils/counter';
import { container, moreButton } from '../constants/constants';

class MoreButton {
  click() {
    newCard.removeCards(container);
    counter.add();
    newCard.createCard(container);
    if (JSON.parse(sessionStorage.getItem('n')) + 2 >= (JSON.parse(sessionStorage.getItem('t')))) {
      moreButton.style.display = 'none';
    }
  }
}

export default MoreButton;
