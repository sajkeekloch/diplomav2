import { search } from '../index';

class Validation {

    check(word) {
        if (word.length === 0 || word.length === 50) {
            search.disabled();
        }

        else {
            search.enabled();
        }
    }
}

export default Validation;
