import {
  newCard,
} from '../index';
import {
  newsCounter,
} from '../modules/LocalStorageRecorder';
import {
  moreButton,
} from '../constants/constants';

class MoreButton {

  constructor(container) {
    this.container = container;
  }

  click() {
    newCard.removeCards(this.container);
    newsCounter.add();
    newCard.createCard(this.container);
    this.checkStatus()
    }

    checkStatus() {
      moreButton.style.display = `${newsCounter.check()}`;
  }

}

export default MoreButton;
