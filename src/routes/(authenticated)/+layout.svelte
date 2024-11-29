<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/appsidebar/AppSidebar.svelte';

	let { children } = $props();
</script>


<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Trigger class="ml-1 mt-1" />
	<Sidebar.Inset>
		<main class="ml-5 mt-10 mr-10">
			{@render children()}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>


<style>

</style>