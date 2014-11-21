describe('ui tests', function() {

    before(function(done) {
        browser.init().url(baseUrl).call(done);
    });

    it('should be no UI regression on the startpage', function(done) {
        browser
            .webdrivercss('startpage', [{
                name: 'teamsection',
                elem: '#section-about'
            }, {
                name: 'contactForm',
                elem: '#section-contact .container'
            }], function(err, res) {
                
                res.teamsection[0].isWithinMisMatchTolerance.should.be.true;
                res.contactForm[0].isWithinMisMatchTolerance.should.be.true;

            })
            .call(done);
    });

    after(function(done) {
        browser.end(done);
    });

});