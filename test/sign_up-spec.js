/* Test script for the sign up page app */
describe('the sign up page app', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });

    it('must have the proper page title', function() {
        expect(browser.getTitle()).toEqual('Sign Up');
    });
});