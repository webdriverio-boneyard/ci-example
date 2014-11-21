describe('functional test', function() {

    before(function(done) {
        browser.init().url(baseUrl).call(done);
    });

    it('should have correct title', function(done) {
        browser
            .getTitle(function(err, title) {
                title.should.be.equal('Amoeba free one page responsive bootstrap site template')
            })
            .call(done);
    });

    after(function(done) {
        browser.end(done);
    });

});