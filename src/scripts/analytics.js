import '../styles/analytics.css';
import Diagram from './modules/Diagram';

if (sessionStorage.getItem('word')) {
  document.querySelector('.request__value').textContent = sessionStorage.getItem('word');
}

if (sessionStorage.getItem('totalRes')) {
  document.querySelector('.metrics__number').textContent = sessionStorage.getItem('totalRes');
}

if (sessionStorage.getItem('inTitles')) {
  document.getElementById('titles').textContent = sessionStorage.getItem('inTitles');
}

const diagram = new Diagram();
diagram.showDates(document.querySelector('.diagram__dates'), document.querySelector('.diagram__rays'));
