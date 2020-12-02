const mod = {

	OLSKLanguageSwitcherLauncherFakeItemProxy () {
		return {
			LCHRecipeName: 'OLSKLanguageSwitcherLauncherFakeItemProxy',
			LCHRecipeCallback () {},
		};
	},

	OLSKLanguageSwitcherLauncherItemSwitch (params) {
		if (typeof params !== 'object' || params === null) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (!params.ParamWindow.location) {
			throw new Error('OLSKErrorInputNotValid');
		}
		
		if (typeof params.OLSKLocalized !== 'function') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof params.OLSKFormatted !== 'function') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof params.ParamLanguageCode !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof params.ParamRouteConstant !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof params.OLSKCanonicalFor !== 'function') {
			throw new Error('OLSKErrorInputNotValid');
		}

		const _this = this;

		return {
			LCHRecipeSignature: ['OLSKLanguageSwitcherLauncherItemSwitch', params.ParamLanguageCode].join('-'),
			LCHRecipeName: params.OLSKFormatted(params.OLSKLocalized('OLSKLanguageSwitcherVersionFormat'), params.OLSKLocalized('OLSKLanguageSwitcherVersionName', params.ParamLanguageCode)[params.ParamLanguageCode]),
			LCHRecipeCallback () {
				params.ParamWindow.location.href = params.OLSKCanonicalFor(params.ParamRouteConstant, {
					OLSKRoutingLanguage: params.ParamLanguageCode,
				});
			},
			LCHRecipeIsExcluded () {
				return !!params.ParamAuthorized;
			},
		};
	},

	OLSKLanguageSwitcherRecipes (params) {
		if (typeof params !== 'object' || params === null) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (!Array.isArray(params.ParamLanguageCodes)) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof params.ParamCurrentLanguage !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof params.ParamSpecUI !== 'boolean') {
			throw new Error('OLSKErrorInputNotValid');
		}

		return [
			mod.OLSKLanguageSwitcherLauncherFakeItemProxy(),
		].concat(params.ParamLanguageCodes.filter(function (e) {
			return e !== params.ParamCurrentLanguage;
		}).map(function (ParamLanguageCode) {
			return mod.OLSKLanguageSwitcherLauncherItemSwitch(Object.assign(Object.assign(Object.assign({}, params), {}), {
				ParamLanguageCode,
			}))
		})).filter(function (e) {
			if (params.ParamSpecUI) {
				return true;
			}

			return !(e.LCHRecipeSignature || e.LCHRecipeName).match(/Fake/);
		});
	},

};

Object.assign(exports, mod);
