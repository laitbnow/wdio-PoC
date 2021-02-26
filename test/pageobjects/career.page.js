import Page from './page'

class CareerPage extends Page {

    /**
     * define elements
    **/

    get allJobsList() {return $('.job-offers__wrapper').$$('.job-offer__title')}
    get searchField() {return $('#search-job')}

    /**
     * define or overwrite page methods
     */

    findUniqueJob (job) {
        return this.allJobsList.filter(elem => elem.getText() === job).length === 1;
    }

    validateSearchResults (query) {
        this.searchField.setValue(query);
        return this.allJobsList.every(elem => elem.getText().includes(query));
    }

}

export default new CareerPage();
