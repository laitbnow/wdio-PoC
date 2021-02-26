import HomePage from '../pageobjects/home.page'
import CareerPage from '../pageobjects/career.page'

describe('10clouds test', function () {

    it('should validate exactly 1 QA Automation job', function () {
        HomePage.open();
        HomePage.goToCareerPage();
        expect(CareerPage.findUniqueJob('QA Automation Engineer')).toBe(true);
    })

    it('should validate search result', function () {
        HomePage.open();
        HomePage.goToCareerPage();
        expect(CareerPage.validateSearchResults('Automation')).toBe(true);
    })
})
