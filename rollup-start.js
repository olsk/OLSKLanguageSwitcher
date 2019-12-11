import RollupStart from './main.svelte';

const OLSKLanguageSwitcher = new RollupStart({
	target: document.body,
	props: {
		OLSKSharedActiveRouteConstant: window.OLSKPublicConstants('OLSKSharedActiveRouteConstant'),
		OLSKSharedPageCurrentLanguage: window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage'),
		OLSKSharedPageLanguagesAvailable: window.OLSKPublicConstants('OLSKSharedPageLanguagesAvailable'),
	},
});

export default OLSKLanguageSwitcher;
