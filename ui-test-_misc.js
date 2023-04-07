require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	describe(`OLSKLanguageSwitcher_Misc--${ kDefaultRoute.OLSKRouteSignature }`, function () {

		before(function () {
			return browser.OLSKVisit(kDefaultRoute);
		});

		describe('OLSKLanguageSwitcherSelected', function () {
			
			it('sets text', function () {
				return browser.assert.text(OLSKLanguageSwitcherSelected, 'EN');
			});		
		
		});

		describe('OLSKLanguageSwitcherVersion', function () {

			'FR,ES,PT,DE'.split(',').forEach(function (e, i) {

				it('sets text ' + e, function () {

					return browser.assert.text(OLSKLanguageSwitcherVersion + `:nth-of-type(${ i + 1 })`, e);
				});		
				
			});
		
		});

	});
	
});
