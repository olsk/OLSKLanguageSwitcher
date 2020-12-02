exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKLayoutRender(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'OLSKLanguageSwitcherEJSStubRoute',
		OLSKRouteLanguageCodes: ['en', 'fr', 'es'],
	}, {
		OLSKRoutePath: '/svelte',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKLayoutRender(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'OLSKLanguageSwitcherSvelteStubRoute',
		OLSKRouteLanguageCodes: ['en', 'fr', 'es'],
	}];
};

exports.OLSKControllerSharedStaticAssetFolders = function () {
	return [
		'node_modules/OLSKRouting',
	];
};

