import '../styles/about.css';
import { mySwiper } from './swiper';
import GitApi from './modules/GitApi';

const gitApi = new GitApi;
gitApi.getCommits();

setTimeout(function () {
    mySwiper.update();
   }, 1000);