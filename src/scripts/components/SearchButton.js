import {loader} from '../utils/loader';
import {newCard, api} from '../index';
import {counter} from '../utils/counter';
import {container, input} from '../constants/constants';

class SearchButton {
    click() {
        loader.showLoader();
        newCard.removeCards(container);
        counter.reset();
        api.resetSessionStorage();
        api.getNews(input.value);
    }
}

export default SearchButton;