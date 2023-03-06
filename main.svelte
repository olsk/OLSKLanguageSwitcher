<script>
export let OLSKSharedPageLanguagesAvailable;
export let OLSKSharedPageCurrentLanguage;
export let OLSKSharedActiveRouteConstant;

import { OLSKLocalized } from 'OLSKInternational';
import logic from './main.js';
import OLSKString from 'OLSKString';

const mod = {

	// DATA

	DataLinkTitle (inputData) {
		return OLSKString.OLSKStringFormatted(OLSKLocalized('OLSKLanguageSwitcherVersionFormat'), OLSKLocalized('OLSKLanguageSwitcherVersionName')[inputData], logic.OLSKLanguageSwitcherCodesMap()[inputData]);
	},

};
</script>

<div class="OLSKLanguageSwitcher">

{#each OLSKSharedPageLanguagesAvailable as e}
	{#if e === OLSKSharedPageCurrentLanguage }
		<span class="OLSKLanguageSwitcherSelected">{ e.toUpperCase() }</span>
	{/if}

	{#if e !== OLSKSharedPageCurrentLanguage}
		<a class="OLSKLanguageSwitcherVersion" aria-label="{ mod.DataLinkTitle(e) }" title="{ mod.DataLinkTitle(e) }" href="{ window.OLSKCanonical(OLSKSharedActiveRouteConstant, {
			OLSKRoutingLanguage: e,
		}) }">{ e.toUpperCase() }</a>	
	{/if}
{/each}

</div>

