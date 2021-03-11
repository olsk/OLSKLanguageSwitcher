const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

const uWindow = function (inputData = {}) {
	return Object.assign({
		location: {},
	}, inputData);
};

const uCanonical = function (param1, param2) {
	return param1 + '-CANONICAL-' + param2.OLSKRoutingLanguage;
};

describe('OLSKLanguageSwitcherCodesMap', function test_OLSKLanguageSwitcherCodesMap() {

	it('returns object', function () {
		deepEqual(mod.OLSKLanguageSwitcherCodesMap(), {
			en: 'English',
			fr: 'Français',
			es: 'Español',
			pt: 'Português',
		});
	});

});

describe('OLSKLanguageSwitcherLauncherFakeItemProxy', function test_OLSKLanguageSwitcherLauncherFakeItemProxy() {

	it('returns object', function () {
		const item = mod.OLSKLanguageSwitcherLauncherFakeItemProxy();
		deepEqual(item, {
			LCHRecipeName: 'OLSKLanguageSwitcherLauncherFakeItemProxy',
			LCHRecipeCallback: item.LCHRecipeCallback,
		});
	});

	context('LCHRecipeCallback', function () {
		
		it('returns undefined', function () {
			deepEqual(mod.OLSKLanguageSwitcherLauncherFakeItemProxy().LCHRecipeCallback(), undefined);
		});

	});

});

describe('OLSKLanguageSwitcherLauncherItemSwitch', function test_OLSKLanguageSwitcherLauncherItemSwitch() {

	const _OLSKLanguageSwitcherLauncherItemSwitch = function (inputData = {}) {
		return mod.OLSKLanguageSwitcherLauncherItemSwitch(Object.assign({
			ParamWindow: uWindow(),
			ParamLanguageCode: Math.random().toString(),
			ParamRouteConstant: Math.random().toString(),
			OLSKCanonical: uCanonical,
		}, inputData))
	}

	it('throws if not object', function () {
		throws(function () {
			mod.OLSKLanguageSwitcherLauncherItemSwitch(null);
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if ParamWindow not window', function () {
		throws(function () {
			_OLSKLanguageSwitcherLauncherItemSwitch({
				ParamWindow: {},
			});
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if ParamLanguageCode not string', function () {
		throws(function () {
			_OLSKLanguageSwitcherLauncherItemSwitch({
				ParamLanguageCode: null,
			});
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if ParamRouteConstant not string', function () {
		throws(function () {
			_OLSKLanguageSwitcherLauncherItemSwitch({
				ParamRouteConstant: null,
			});
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if OLSKCanonical not function', function () {
		throws(function () {
			_OLSKLanguageSwitcherLauncherItemSwitch({
				OLSKCanonical: null,
			});
		}, /OLSKErrorInputNotValid/);
	});

	it('returns object', function () {
		const ParamLanguageCode = uRandomElement(Object.keys(mod.OLSKLanguageSwitcherCodesMap()));
		const item = _OLSKLanguageSwitcherLauncherItemSwitch({
			ParamLanguageCode,
		});

		deepEqual(item, {
			LCHRecipeSignature: [
				'OLSKLanguageSwitcherLauncherItemSwitch',
				ParamLanguageCode,
			].join('-'),
			LCHRecipeName: mod.OLSKLanguageSwitcherCodesMap()[ParamLanguageCode],
			LCHRecipeCallback: item.LCHRecipeCallback,
			LCHRecipeIsExcluded: item.LCHRecipeIsExcluded,
		});
	});

	context('LCHRecipeCallback', function () {

		it('sets ParamWindow.location', function () {
			const ParamWindow = uWindow({
				location: {},
			});
			const ParamRouteConstant = Math.random().toString();
			const ParamLanguageCode = Math.random().toString();
			
			_OLSKLanguageSwitcherLauncherItemSwitch({
				ParamWindow,
				ParamLanguageCode,
				ParamRouteConstant,
			}).LCHRecipeCallback();

			deepEqual(ParamWindow.location.href, uCanonical(ParamRouteConstant, {
				OLSKRoutingLanguage: ParamLanguageCode,
			}));
		});

	});

});

describe('OLSKLanguageSwitcherRecipes', function test_OLSKLanguageSwitcherRecipes() {

	const _OLSKLanguageSwitcherRecipes = function (inputData = {}) {
		return mod.OLSKLanguageSwitcherRecipes(Object.assign({
			ParamLanguageCodes: [],
			ParamCurrentLanguage: Math.random().toString(),
			ParamSpecUI: false,
			ParamWindow: uWindow(),
			ParamRouteConstant: Math.random().toString(),
			OLSKCanonical: uCanonical,
		}, inputData))
	};

	it('throws if not object', function () {
		throws(function () {
			mod.OLSKLanguageSwitcherRecipes(null);
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if ParamLanguageCodes not array', function () {
		throws(function () {
			_OLSKLanguageSwitcherRecipes({
				ParamLanguageCodes: null,
			});
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if ParamCurrentLanguage not string', function () {
		throws(function () {
			_OLSKLanguageSwitcherRecipes({
				ParamCurrentLanguage: null,
			});
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if ParamSpecUI not boolean', function () {
		throws(function () {
			_OLSKLanguageSwitcherRecipes({
				ParamSpecUI: null,
			});
		}, /OLSKErrorInputNotValid/);
	});

	it('returns producton recipes', function () {
		const ParamLanguageCodes = Array.from(Array(Math.max(Date.now() % 10, 1))).map(function () {
			return Math.random().toString();
		});
		const ParamCurrentLanguage = uRandomElement(ParamLanguageCodes);

		deepEqual(_OLSKLanguageSwitcherRecipes({
			ParamLanguageCodes,
			ParamCurrentLanguage,
		}).map(function (e) {
			return e.LCHRecipeSignature || e.LCHRecipeName;
		}), ParamLanguageCodes.reduce(function (coll, item) {
			if (item === ParamCurrentLanguage) {
				return coll;
			}

			return coll.concat([
				'OLSKLanguageSwitcherLauncherItemSwitch',
				item,
			].join('-'));
		}, []));
	});

	context('ParamSpecUI', function () {

		it('returns all recipes if true', function () {
			deepEqual(_OLSKLanguageSwitcherRecipes({
				ParamSpecUI: true,
			}).map(function (e) {
				return e.LCHRecipeSignature || e.LCHRecipeName;
			}), Object.keys(mod).filter(function (e) {
				return e.match(/Fake/);
			}));
		});
	
	});

});
