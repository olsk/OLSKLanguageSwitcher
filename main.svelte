<script>
export let OLSKLanguageSwitcherAvailable;
export let OLSKLanguageSwitcherSelected;
export let OLSKSharedActiveRouteConstant;

import OLSKInternational from 'OLSKInternational';
import OLSKString from 'OLSKString';
const OLSKLocalized = function(translationConstant) {
	return OLSKInternational.OLSKInternationalLocalizedString(translationConstant, JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`)[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};

const mod = {

	// DATA

	DataLinkTitle (inputData) {
		return OLSKString.OLSKStringWithFormat(OLSKLocalized('OLSKLanguageSwitcherVersionFormat'), OLSKLocalized('OLSKLanguageSwitcherVersionName')[inputData]);
	},

};
</script>

<div class="OLSKLanguageSwitcher">

{#each OLSKLanguageSwitcherAvailable as e}
	{#if e === OLSKLanguageSwitcherSelected }
		<span class="OLSKLanguageSwitcherSelected">{ e.toUpperCase() }</span>
	{/if}

	{#if e !== OLSKLanguageSwitcherSelected}
		<a class="OLSKLanguageSwitcherVersion" aria-label="{ mod.DataLinkTitle(e) }" title="{ mod.DataLinkTitle(e) }" href="{ window.OLSKCanonicalFor(OLSKSharedActiveRouteConstant, {
			OLSKRoutingLanguage: e,
		}) }">{ e.toUpperCase() }</a>	
	{/if}
{/each}

</div>

