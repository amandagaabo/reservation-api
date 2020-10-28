exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', table => {
		table.increments('id').primary();

		table.uuid('uuid').notNull();
		table.string('first_name').notNull();
		table.string('last_name').notNull();
		table.string('email').notNull();
		table.string('address').notNull();
		table.string('city').notNull();
		table.string('state').notNull();
		table.integer('zip_code').notNull();
		table.string('phone_number').notNull();
		table.string('password').notNull();
		table.boolean('is_admin');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');
};
