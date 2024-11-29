<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/appsidebar/AppSidebar.svelte';
	import AppHeader from '$lib/components/appheader/AppHeader.svelte';

	let { children } = $props();
</script>


<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<AppHeader/>
		<main class="m-10">
			{@render children()}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>


<style>

</style>