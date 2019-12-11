exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/OLSKLanguageSwitcherEJS',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.render(require('path').join(__dirname, 'stub-view'), {
				OLSKLanguageSwitcherStubParams: Object.entries(req.query).map(function (e) {
					if (e[0] === 'OLSKLanguageSwitcherAvailable') {
						e[1] = JSON.parse(e[1]);
					}

					return e;
				}).reduce(function (coll, item) {
					coll[item[0]] = item[1];

					return coll;
				}, {}),
			});
		},
		OLSKRouteSignature: 'OLSKLanguageSwitcherEJSStubRoute',
		OLSKRouteLanguages: ['en', 'fr', 'es'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}, {
		OLSKRoutePath: '/stub/OLSKLanguageSwitcherSvelte',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.render(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'OLSKLanguageSwitcherSvelteStubRoute',
		OLSKRouteLanguages: ['en', 'fr', 'es'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
