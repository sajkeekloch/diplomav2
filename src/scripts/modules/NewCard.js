import { formatDate } from '../utils/formatDate';

class NewCardList {
  constructor(container) {
    this.container = container;
  }

  showCard(card, cardDate, imgCard, cardTittle, cardText, cardSource, i) {
    cardText.textContent = JSON.parse(sessionStorage.getItem(`item${i}`)).description;
    card.setAttribute('href', JSON.parse(sessionStorage.getItem(`item${i}`)).url);
    cardSource.textContent = JSON.parse(sessionStorage.getItem(`item${i}`)).source.name;
    cardTittle.textContent = JSON.parse(sessionStorage.getItem(`item${i}`)).title;
    cardDate.textContent = formatDate(new Date(JSON.parse(sessionStorage.getItem(`item${i}`)).publishedAt));
    imgCard.setAttribute('src', JSON.parse(sessionStorage.getItem(`item${i}`)).urlToImage);
  }

  createCard(container) {
    const n = sessionStorage.getItem('n');
    for (let i = 0; i < n; i++) {
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
      cardTittle.classList.add('card__title');

      const cardText = document.createElement('p');
      cardText.classList.add('card__text');

      const cardSource = document.createElement('span');
      cardSource.classList.add('card__source');

      card.appendChild(imgCard);
      card.appendChild(cardDate);
      card.appendChild(cardTittle);
      card.appendChild(cardText);
      card.appendChild(cardSource);
      container.appendChild(card);

      this.showCard(card, cardDate, imgCard, cardTittle, cardText, cardSource, i);
    }
  }

  removeCards(container) {
    let child = container.lastElementChild;
    while (child) {
      container.removeChild(child);
      child = container.lastElementChild;
    }
  }
}

export default NewCardList;