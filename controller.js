exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'OLSKLanguageSwitcherEJSStubRoute',
		OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
	}, {
		OLSKRoutePath: '/svelte',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'OLSKLanguageSwitcherSvelteStubRoute',
		OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
	}];
};

exports.OLSKControllerSharedStaticAssetFolders = function () {
	return [
		'node_modules/OLSKRouting',
	];
};

