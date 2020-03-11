import { newCard } from '../index';
import { counter } from '../utils/counter';
import { container } from '../constants/constants';

class MoreButton {
  click() {
    newCard.removeCards(container);
    counter.add();
    newCard.createCard(container);
  }
}

export default MoreButton;
