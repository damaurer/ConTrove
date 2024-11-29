import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { primaryKey } from 'drizzle-orm/pg-core';
export const user = sqliteTable('user', {
	id: text('id').primaryKey(),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
});

export type User = typeof user.$inferSelect;

export const session = sqliteTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

export type Session = typeof session.$inferSelect;

export const role = sqliteTable('role', {
	name: text('name').primaryKey()
});

export type Role = typeof role.$inferSelect;

export const roleToUser = sqliteTable('role_to_user', {
	userId: text('user_id').notNull().references(() => user.id),
	roleName: text('role_name').notNull().references(() => role.name)
}, (t) => ({
	pk: primaryKey({ columns: [t.userId, t.roleName] })
}));

export type RoleToUser = typeof roleToUser.$inferSelect;

