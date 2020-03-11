import SearchButton from '../components/SearchButton';
import {
    period, searchButton, container, moreButton, input,
 } from '../constants/constants';
const search = new SearchButton(searchButton);

class Validation {
    searchActive() {
        searchButton.setAttribute('disabled', 'true');
        searchButton.style.background = '#2f71e5';
    }
    
    searchDisabled() {
        searchButton.removeAttribute('disabled');
        searchButton.style.background = 'grey';
    }
}

export default Validation;