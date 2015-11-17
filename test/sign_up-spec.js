/* Test script for the sign up page app */
describe('the sign up page app', function() {
    
    var input = element(by.model('email.text'));
    var requiredMsg = $('.email-required-error');
    var validMsg = $('valid-required-error');
    var dobInp = element(by.model('user.birthdate'));
    var passwordInp = element(by.model('user.password'));
    var cPasswordInp = element(by.model('user.confirm'));

    function validateDob(elem) {
        //page rendered, no alert
        expect(elem.isPresent()).toEqual(false);

        //valid date, no alert
        dobInp.sendKeys('11/15/1994');
        expect(elem.isPresent()).toEqual(false);

        //clear input, alert
        dobInp.clear();
        expect(elem.isPresent()).toEqual(true);

        //spaces input, alert
        dobInp.sendKeys('    ');
        expect(elem.isPresent()).toEqual(true);
        dobInp.clear();
    }

    beforeEach(function() {
        browser.get('http://localhost:8000');
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

    //test for required birth date
    it('must have display warning if birth date is not present', function () {
        var dobReq = element(by.id('dobReqAlert'));

        validateDob(dobReq);

        //type an invalid date -> no error
        dobInp.sendKeys('11/15/05');
        expect(dobReq.isPresent()).toEqual(false);
    });

    //test for 13 years or older
    it('must have display warning if user is not 13 or older', function () {
        var dobValid = element(by.id('dobValidAlert'));

        validateDob(dobValid);

        //type an invalid date -> no error
        dobInp.sendKeys('11/15/05');
        expect(dobValid.isPresent()).toEqual(true);
    });

    it('must display error if password or confirm password entry is empty', function() {
        var passwordReq = element(by.id('passwordReqError'));
        var cPasswordReq = element(by.id('password2InpReqError'));
        var passwordMatch = element(by.id('passwordsMatchError'));

        passwordInp.sendKeys('test');
        expect(passwordReq.isPresent()).toEqual(false);

        passwordInp.clear();
        expect(passwordInp.isPresent()).toEqual(true);

        cPasswordInp.sendKeys('test');
        expect(cPasswordReq.isPresent()).toEqual(false);

        cPasswordInp.sendKeys('test');
        cPasswordInp.clear();
        expect(cPasswordReq.isPresent()).toEqual(true);

        passwordInp.sendKeys('test');
        cPasswordInp.sendKeys('test');
        expect(passwordMatch.isPresent()).toEqual(false);

        passwordInp.sendKeys('test');
        cPasswordInp.sendKeys('testfail');
        expect(passwordMatch.isPresent()).toEqual(true);
    });
});