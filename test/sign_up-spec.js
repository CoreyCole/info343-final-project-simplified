/* Test script for the sign up page app */
describe('the sign up page app', function() {

    var fName = element(by.id('fnameInp'));
    var fNameError = element(by.id('fNameError'))
    var fNamePatternError = element(by.id('fNamePatternError'));

    var lName = element(by.id('lnameInp'));
    var lNameError = element(by.id('lNameError'));
    var lNamePatternError = element(by.id('lNamePatternError'));

    var birthdate = element(by.id('birthdateInp'))


    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });

    it('must have the proper page title', function() {
        expect(browser.getTitle()).toEqual('Sign Up');
    });

    it('must enter first name', function(){
        fName.click();
        lName.click();
        expect(fNameError.isPresent()).toEqual(true);
        fName.click();
        fName.sendKeys('Memie');
        expect(fNameError.isPresent()).toEqual(false);
    });

    it('must enter last name', function(){
        lName.click();
        birthdate.click();
        expect(lNameError.isPresent()).toEqual(true);
        lName.click();
        lName.sendKeys('Huang');
        expect(lNameError.isPresent()).toEqual(false);
    });

    it('first name should be valid', function(){
        expect(fNamePatternError.isPresent()).toEqual(false);
        fName.sendKeys('123');
        lName.click();
        expect(fNamePatternError.isPresent()).toEqual(true);
    });

    it('last name should be valid', function(){
        expect(lNamePatternError.isPresent()).toEqual(false);
        lName.sendKeys('123');
        fName.click();
        expect(lNamePatternError.isPresent()).toEqual(true);
    });
});
