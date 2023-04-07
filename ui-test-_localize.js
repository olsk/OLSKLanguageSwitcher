require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

		const uLocalized = function (inputData) {
			return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
		};

		describe(`OLSKLanguageSwitcher_Localize-${ kDefaultRoute.OLSKRouteSignature }-${ OLSKRoutingLanguage }`, function () {

			const code = kDefaultRoute.OLSKRouteLanguageCodes.filter(function (e) { return e !== OLSKRoutingLanguage; })[0];
			const _DataLinkTitle = OLSKTestingFormatted(uLocalized('OLSKLanguageSwitcherVersionFormat'), uLocalized('OLSKLanguageSwitcherVersionName')[code], require('./main.js').OLSKLanguageSwitcherCodesMap()[code]);

			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKRoutingLanguage,
				});
			});

			it('localizes OLSKLanguageSwitcherVersion title', function () {
				return browser.assert.attribute(`${ OLSKLanguageSwitcherVersion }:first-of-type`, 'title', _DataLinkTitle);
			});

			it('localizes OLSKLanguageSwitcherVersion aria-label', function () {
				return browser.assert.attribute(`${ OLSKLanguageSwitcherVersion }:first-of-type`, 'aria-label', _DataLinkTitle);
			});

		});

	});

})
