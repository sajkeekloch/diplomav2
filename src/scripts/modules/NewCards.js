import {
  formatDate,
} from '../utils/formatDate';

class NewCards {
  constructor(container) {
    this.container = container;
  }

  showCard(card, cardDate, imgCard, cardTittle, cardText, cardSource, i) {
    cardText.textContent = JSON.parse(localStorage.getItem(`item${i}`)).description;
    card.setAttribute('href', JSON.parse(localStorage.getItem(`item${i}`)).url);
    cardSource.textContent = JSON.parse(localStorage.getItem(`item${i}`)).source.name;
    cardTittle.textContent = JSON.parse(localStorage.getItem(`item${i}`)).title;
    cardDate.textContent = formatDate(new Date(JSON.parse(localStorage.getItem(`item${i}`)).publishedAt));
    imgCard.setAttribute('src', JSON.parse(localStorage.getItem(`item${i}`)).urlToImage);
  }

  createCard() {
    const n = localStorage.getItem('n');
    for (let i = n - 3; i < n; i++) {
      const card = document.createElement('a');
      card.classList.add('results__card');
      card.classList.add('link');
      card.setAttribute('target', '_blank');

      const imgCard = document.createElement('img');
      imgCard.classList.add('card__cover');
      imgCard.setAttribute('alt', 'cardImg');

      const cardDate = document.createElement('span');
      cardDate.classList.add('card__date');

      const cardTittle = document.createElement('h3');
      card.setAttribute('overflow', 'hidden');
      cardTittle.classList.add('card__title');

      const cardText = document.createElement('p');
      card.setAttribute('overflow', 'hidden');
      cardText.classList.add('card__text');

      const cardSource = document.createElement('span');
      cardSource.classList.add('card__source');

      card.appendChild(imgCard);
      card.appendChild(cardDate);
      card.appendChild(cardTittle);
      card.appendChild(cardText);
      card.appendChild(cardSource);
      
      this.showCard(card, cardDate, imgCard, cardTittle, cardText, cardSource, i);

      this.container.appendChild(card);
    }
  }

  removeCards() {
    while (this.container.hasChildNodes()) {
      this.container.removeChild(this.container.childNodes[0]);
    }
  }
}

export default NewCards;
