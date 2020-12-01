require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

		const uLocalized = function (inputData) {
			return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
		};

		describe(`OLSKLanguageSwitcher_Localize-${ kDefaultRoute.OLSKRouteSignature }-${ OLSKRoutingLanguage }`, function () {

			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKRoutingLanguage,
				});
			});

			it('localizes OLSKLanguageSwitcherVersion', function () {
				const _DataLinkTitle = OLSKTestingFormatted(uLocalized('OLSKLanguageSwitcherVersionFormat'), uLocalized('OLSKLanguageSwitcherVersionName')[kDefaultRoute.OLSKRouteLanguageCodes.filter(function (e) { return e !== OLSKRoutingLanguage; })[0]]);
				browser.assert.attribute(`${ OLSKLanguageSwitcherVersion }:first-of-type`, 'title', _DataLinkTitle);
				browser.assert.attribute(`${ OLSKLanguageSwitcherVersion }:first-of-type`, 'aria-label', _DataLinkTitle);
			});

		});

	});

})
