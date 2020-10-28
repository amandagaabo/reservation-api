exports.up = function(knex, Promise) {
	return knex.schema.createTable('campsites', table => {
		table.increments('id').primary();

		table.string('user_uuid').notNull(); // use to join with user table info
		table.string('site_uuid').notNull(); // use to join with campsite table info
		table.date('reservation_date').notNull();
		table.integer('number_of_people').notNull();
		table.string('trailhead_in').notNull();
		table.string('trailhead_out').notNull();
		table.string('license_plate_number').notNull();
		table.string('license_plate_state').notNull();
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('campsites');
};
