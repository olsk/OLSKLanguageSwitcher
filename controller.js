const { OLSKLanguageSwitcherCodesMap } = require('./main.js');

exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'), {
				OLSKLanguageSwitcherCodesMap,
			});
		},
		OLSKRouteSignature: 'OLSKLanguageSwitcherEJSStubRoute',
		OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt', 'de'],
	}, {
		OLSKRoutePath: '/svelte',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'), {
				OLSKLanguageSwitcherCodesMap,
			});
		},
		OLSKRouteSignature: 'OLSKLanguageSwitcherSvelteStubRoute',
		OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt', 'de'],
	}];
};

exports.OLSKControllerSharedStaticAssetFolders = function () {
	return [
		'node_modules/OLSKRouting',
	];
};

