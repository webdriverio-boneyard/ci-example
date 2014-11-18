describe('portfolio section', function() {

    before(function(done) {
        browser.init().url(baseUrl).call(done);
    });

    it('should have "All" checkt after opening the page', function(done) {
        browser
            .getAttribute('=All', 'class', function(err, className) {
                className.should.containEql('current')
            })
            .call(done);
    });

    it('should be 9 images visible', function(done) {
        browser
            .elements('//article[contains(@class, "isotope-item") and not(contains(@class, "isotope-hidden"))]', function(err, res) {
                res.value.should.have.length(9);
            })
            .call(done);
    });


    describe('when clicking on the "Web Design" section', function() {

        before(function(done) {
            browser.click('=Web Design').pause(1000).call(done);
        });

        it('should make tab "Web Design" to current tab', function(done) {
            browser
                .getAttribute('=Web Design', 'class', function(err, className) {
                    className.should.containEql('current');
                })
                .call(done);
        });

        it('should be 2 images visible', function(done) {
            browser
                .elements('//article[contains(@class, "isotope-item") and not(contains(@class, "isotope-hidden"))]', function(err, res) {
                    res.value.should.have.length(2);
                })
                .call(done);
        });

    });

    describe('when clicking on the "Photography" section', function() {

        before(function(done) {
            browser.click('=Photography').pause(1000).call(done);
        });

        it('should make tab "Photography" to current tab', function(done) {
            browser
                .getAttribute('=Photography', 'class', function(err, className) {
                    className.should.containEql('current')
                })
                .call(done);
        });

        it('should be 2 images visible', function(done) {
            browser
                .elements('//article[contains(@class, "isotope-item") and not(contains(@class, "isotope-hidden"))]', function(err, res) {
                    res.value.should.have.length(4);
                })
                .call(done);
        });

    });

    describe('when clicking on the "Print" section', function() {

        before(function(done) {
            browser.click('=Print').pause(1000).call(done);
        });

        it('should make tab "Print" to current tab', function(done) {
            browser
                .getAttribute('=Print', 'class', function(err, className) {
                    className.should.containEql('current')
                })
                .call(done);
        });

        it('should be 2 images visible', function(done) {
            browser
                .elements('//article[contains(@class, "isotope-item") and not(contains(@class, "isotope-hidden"))]', function(err, res) {
                    res.value.should.have.length(3);
                })
                .call(done);
        });

    });

    after(function(done) {
        browser.end(done);
    })

});