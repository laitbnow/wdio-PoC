import Page from './page'

class HomePage extends Page {

    /**
     * define elements
     **/

    get careerButton() {return $('a[href="/careers/"')}

    /**
     * define or overwrite page methods
     */

    open () {
        super.open('');
    }

    goToCareerPage () {
        return this.careerButton.click();
    }
}

export default new HomePage();
