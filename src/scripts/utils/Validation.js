import { search } from '../index';

class Validation {
    constructor(word) {
        this.word = word;
    }

    check() {
        if (this.word.length === 0) {
            search.disabled();
        }

        else {
            search.enabled();
        }
    }
}

export default Validation;
