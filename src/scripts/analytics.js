import '../styles/analytics.css';
import Diagram from './modules/Diagram';

if (localStorage.getItem('word')) {
  document.querySelector('.request__value').textContent = localStorage.getItem('word');
}

if (localStorage.getItem('totalRes')) {
  document.querySelector('.metrics__number').textContent = localStorage.getItem('totalRes');
}

if (localStorage.getItem('inTitles')) {
  document.getElementById('titles').textContent = localStorage.getItem('inTitles');
}

const diagram = new Diagram();
diagram.showDates(document.querySelector('.diagram__dates'), document.querySelector('.diagram__rays'));