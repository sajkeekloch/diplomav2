import {
  formatDate,
} from '../utils/formatDate';
import {
  containerGit,
} from '../constants/constants';

class GitCards {
  constructor(containerGit) {
    this.containerGit = containerGit;
  }

  render() {
    for (let i = 0; i < 10; i++) {
      const card = document.createElement('div');
      card.classList.add('swiper-slide');

      const date = document.createElement('div');
      date.classList.add('slide__date');

      const author = document.createElement('div');
      author.classList.add('slide__author');

      const title = document.createElement('div');
      title.classList.add('slide__title');

      const photo = document.createElement('img');
      photo.classList.add('slide__photo');

      const name = document.createElement('h2');
      name.classList.add('slide__name');

      const email = document.createElement('div');
      email.classList.add('slide__email');

      const text = document.createElement('p');
      text.classList.add('slide__text');

      name.textContent = JSON.parse(localStorage.getItem(`commit${i}`)).commit.author.name;

      email.textContent = JSON.parse(localStorage.getItem(`commit${i}`)).commit.committer.email;

      photo.setAttribute('src', JSON.parse(localStorage.getItem(`commit${i}`)).committer.avatar_url);

      text.textContent = JSON.parse(localStorage.getItem(`commit${i}`)).commit.message;

      date.textContent = formatDate(new Date(JSON.parse(localStorage.getItem(`commit${i}`)).commit.committer.date));

      card.appendChild(date);
      title.appendChild(name);
      title.appendChild(email);
      author.appendChild(photo);
      author.appendChild(title);
      card.appendChild(author);
      card.appendChild(text);
      containerGit.appendChild(card);

      const mySwiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        height: 288,
        width: 400,
        spaceBetween: 16,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }
}

export default GitCards;
