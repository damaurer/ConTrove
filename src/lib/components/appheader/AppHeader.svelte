<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';

	import { Separator } from '$lib/components/ui/separator';
	import Modetoggle from '$lib/components/modetoggle/Modetoggle.svelte';
	import I18n from '$lib/components/i18n/I18n.svelte';
</script>

<header class="flex h-16 shrink-0 items-center gap-2 px-4">
	<Sidebar.Trigger class="-ml-1" />
	<Separator orientation="vertical" />
	<Breadcrumb.Root class="flex-1">
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>
	<Separator orientation="vertical" />
	<Modetoggle />
	<Separator orientation="vertical" />
	<I18n />
</header>