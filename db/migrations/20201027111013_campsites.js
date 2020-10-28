exports.up = function(knex, Promise) {
	return knex.schema.createTable('campsites', table => {
		table.increments('id').primary();

		table.uuid('uuid').notNull();
		table.string('site_area').notNull();
		table.string('site_code').notNull(); // group site and regular share site codes
		table.string('site_name').notNull();
		table.date('snow_free_date').notNull();
		table.integer('number_of_sites').notNull();
		table.float('miles_from_trailhead').notNull();
		table.integer('site_elevation').notNull();
		table.integer('elevation_gain').notNull();
		table.boolean('is_group_site').notNull();
		table.boolean('is_stock_site').notNull();
		table.boolean('has_privy').notNull();
		table.boolean('fires_allowed').notNull();
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('campsites');
};
