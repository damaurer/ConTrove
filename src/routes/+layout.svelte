<script lang="ts">
	import '../app.scss';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
</script>

<ModeWatcher />
<ParaglideJS {i18n}>
	<div class="z-0 block relative">
	{@render children()}
	</div>
</ParaglideJS>

<style>
	:global(body) {
		padding: 0;
		margin: 0;
		font-family:
			-apple-system,
			BlinkMacSystemFont,
			Segoe UI,
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			Fira Sans,
			Droid Sans,
			Helvetica Neue,
			sans-serif;
	}
</style>
