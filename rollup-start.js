import RollupStart from './main.svelte';

const OLSKLanguageSwitcher = new RollupStart({
	target: document.body,
	props: Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()).map(function (e) {
		if (e[0] === 'OLSKLanguageSwitcherAvailable') {
			e[1] = JSON.parse(e[1]);
		}

		return e;
	}).concat([['OLSKSharedActiveRouteConstant', 'OLSKLanguageSwitcherSvelteStubRoute']])),
});

export default OLSKLanguageSwitcher;
