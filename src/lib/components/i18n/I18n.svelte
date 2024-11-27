<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	import flags from '$lib/components/i18n/flags';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages.js';


	const flagsArray = Object.entries(flags);


	let value = $state(languageTag());

	$effect(() => {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, value);
		goto(localisedPath);
	});

</script>

<div class="reduced-select">
	<Select.Root type="single" name="language" bind:value >
		<Select.Trigger class="w-[180px]">
			<img src={flags[value]} alt="Flag">
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				{#each flagsArray as [key, flag]}
					<Select.Item value={key} label={key}>
						<img src={flag} alt="Flag">
						<span>{m[`flag_${key}`]()}</span>
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>

<style>
    img {
        height: 1rem;
        width: auto;
    }

</style>