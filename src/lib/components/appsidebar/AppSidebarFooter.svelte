<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import ChevronUp from 'lucide-svelte/icons/chevron-up';
	import { goto } from '$app/navigation';

	async function signOut() {
		const response = await fetch('/api/logout', {
			method: 'POST'
		})

		if(response.status === 200 && response.redirected) {
			goto(response.url)
		}
		console.log("SIGN OUT", response)
	}

	function openAccount() {
		goto("/account")
	}

</script>

<Sidebar.Menu>
	<Sidebar.MenuItem>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
				<Sidebar.MenuButton
					{...props}
					class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
				>
					Username
					<ChevronUp class="ml-auto" />
				</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				side="top"
				class="w-[--bits-dropdown-menu-anchor-width]"
			>
				<DropdownMenu.Item onclick={openAccount}>
					<span>Account</span>
				</DropdownMenu.Item>
				<DropdownMenu.Item onclick={signOut}>
					<span>Sign out</span>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu>