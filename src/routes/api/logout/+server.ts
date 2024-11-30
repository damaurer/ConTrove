import { error, redirect, RequestEvent } from '@sveltejs/kit';
import * as auth from '$lib/server/auth';


export const POST = async (event: RequestEvent): Response => {
	if (!event.locals.session) {
		return error(401);
	}
	await auth.invalidateSession(event.locals.session.id);
	auth.deleteSessionTokenCookie(event);

	return redirect(302, '/login');
}