class Loader {
    constructor(container) {
        this.container = container;
    }

    showLoader() {
        document.querySelector('.preloader').style.display = 'flex'
        document.querySelector('.results').style.display = 'none'
        document.querySelector('.notFound').style.display = 'none'
    }

    showResults() {
        document.querySelector('.results').style.display = 'flex'
        document.querySelector('.preloader').style.display = 'none'
        document.querySelector('.notFound').style.display = 'none'
    }

    notFound() {
        document.querySelector('.notFound').style.display = 'flex'
        document.querySelector('.preloader').style.display = 'none'
        document.querySelector('.results').style.display = 'none'
    }
}

const loader = new Loader;

export {loader}