import { deepEqual } from 'assert';

require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

		const uLocalized = function (inputData) {
			return OLSKTestingLocalized(inputData, languageCode);
		};

		describe(`OLSKLanguageSwitcher_Localize-${ kDefaultRoute.OLSKRouteSignature }-${ languageCode }`, function () {

			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKRoutingLanguage: languageCode,
				});
			});

			it('localizes OLSKLanguageSwitcherVersion', function () {
				const _DataLinkTitle = require('OLSKString').OLSKStringWithFormat(uLocalized('OLSKLanguageSwitcherVersionFormat'), uLocalized('OLSKLanguageSwitcherVersionName')[kDefaultRoute.OLSKRouteLanguages.filter(function (e) { return e !== languageCode; })[0]]);
				browser.assert.attribute(`${ OLSKLanguageSwitcherVersion }:first-of-type`, 'title', _DataLinkTitle);
				browser.assert.attribute(`${ OLSKLanguageSwitcherVersion }:first-of-type`, 'aria-label', _DataLinkTitle);
			});

		});

	});

})
