require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	describe(`OLSKLanguageSwitcher_Misc--${ kDefaultRoute.OLSKRouteSignature }`, function () {

		before(function () {
			return browser.OLSKVisit(kDefaultRoute);
		});

		describe('OLSKLanguageSwitcherSelected', function () {
			
			it('sets text', function () {
				browser.assert.text(OLSKLanguageSwitcherSelected, 'EN');
			});		
		
		});

		describe('OLSKLanguageSwitcherVersion', function () {
			
			it('sets text', function () {
				browser.assert.text(OLSKLanguageSwitcherVersion, 'FRES');
			});		
		
		});

	});
	
});
