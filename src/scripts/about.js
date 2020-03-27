import '../styles/about.css';
import GitApi from './modules/GitApi';

const gitApi = new GitApi;
gitApi.getCommits();

