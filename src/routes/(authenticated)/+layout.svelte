<script lang="ts">
	import I18n from '$lib/components/i18n/I18n.svelte';
	import Modetoggle from '$lib/components/modetoggle/Modetoggle.svelte';

	let { children } = $props();
</script>


	{@render children()}

<div class="top-corner">
	<Modetoggle />
	<I18n></I18n>
</div>


<style>
	:global(body) {
			position: relative;
	}

	.top-corner {
			position: absolute;
      top: 1rem;
      right: 1rem;
			z-index: 1;
			display: flex;
			flex-direction: row;
	}
</style>