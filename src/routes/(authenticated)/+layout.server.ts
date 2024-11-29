import type { LayoutServerLoad } from '../../../.svelte-kit/types/src/routes/(authenticated)/$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/login');
	}
	return { user: event.locals.user };
};