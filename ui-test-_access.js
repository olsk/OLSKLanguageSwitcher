Object.entries({
	OLSKLanguageSwitcher: '.OLSKLanguageSwitcher',
	
	OLSKLanguageSwitcherSelected: '.OLSKLanguageSwitcherSelected',
	
	OLSKLanguageSwitcherVersion: '.OLSKLanguageSwitcherVersion',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	describe(`OLSKLanguageSwitcher_Access-${ kDefaultRoute.OLSKRouteSignature }`, function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});
		
		it('shows OLSKLanguageSwitcher', function() {
			return browser.assert.elements(OLSKLanguageSwitcher, 1);
		});
		
		it('shows OLSKLanguageSwitcherSelected', function() {
			return browser.assert.elements(OLSKLanguageSwitcherSelected, 1);
		});
		
		it('shows OLSKLanguageSwitcherVersion', function() {
			return browser.assert.elements(OLSKLanguageSwitcherVersion, kDefaultRoute.OLSKRouteLanguageCodes.length - 1);
		});
		
	});
	
})
