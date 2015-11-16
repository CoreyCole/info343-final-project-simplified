/* Test script for the sign up page app */
describe('the sign up page app', function() {
    
    var input = element(by.model('email.text'));
    var requiredMsg = $('.email-required-error');
    var validMsg = $('valid-required-error');

    beforeEach(function() {
        browser.get('http://localhost:8000/info343-final-project-simplified/#/sign-up');
    });

    it('must have the proper page title', function() {
        expect(browser.getTitle()).toEqual('Sign Up');
    });

    it('should initialize to model', function() {
		expect(input.getAttribute('placeholder')).toEqual('email address');
	});

    it('should accept a valid email address', function() {
	    input.sendKeys('sdf;lskj');
	    expect(requiredMsg.isPresent()).toEqual(false);
	    input.clear();
	    expect(requiredMsg.isPresent()).toEqual(true);
	    input.sendKeys('cory_s_brown@msn.com');
	   	expect(requiredMsg.isPresent()).toEqual(false); // should be false but I dont know why it wont pass
	});

    it('should be invalid if not email', function() {
        input.sendKeys('xxx');
        expect(requiredMsg.isPresent()).toEqual(false);
        input.clear();
        expect(requiredMsg.isPresent()).toEqual(true);
        expect(validMsg.isPresent()).toEqual(false);

    });
});