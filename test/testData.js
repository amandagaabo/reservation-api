export const testUsers = [
	{
		uuid: '416ac246-e7ac-49ff-93b4-f7e94d997e6a',
		first_name: 'Admin',
		last_name: 'Test',
		address: '123 First St',
		city: 'Boulder',
		state: 'CO',
		zip_code: 80301,
		phone_number: '800-555-1234',
		email: 'admin.test@gmail.com',
		password: 'Password123',
		is_admin: true
	},
	{
		uuid: '123ac246-e7ac-49ff-93b4-f7e94d997e6a',
		first_name: 'User',
		last_name: 'Test',
		address: '222 Walnut St',
		city: 'Boulder',
		state: 'CO',
		zip_code: 80303,
		phone_number: '800-555-6677',
		email: 'user.test@gmail.com',
		password: 'Password456',
		is_admin: false
	}
];

export const testCampsites = [
	{
		uuid: 'b7e4be10-1880-11eb-adc1-0242ac120002',
		site_area: 'North Fork',
		site_code: '001',
		site_name: 'Boundary Creek',
		snow_free_date: new Date('6/2'),
		number_of_sites: 2,
		miles_from_trailhead: 4.6,
		site_elevation: 9120,
		elevation_gain: 1160,
		has_privy: true,
		fires_allowed: false
	},
	{
		uuid: 'c8627480-1880-11eb-adc1-0242ac120002',
		site_area: 'North Fork',
		site_code: '003',
		site_name: 'Silvanmere',
		snow_free_date: new Date('6/4'),
		number_of_sites: 2,
		miles_from_trailhead: 5.6,
		site_elevation: 9360,
		elevation_gain: 1400,
		has_privy: false,
		is_group_site: false,
		is_stock_site: false,
		fires_allowed: true
	},
	{
		uuid: '3a7c20b0-ae45-44ea-bf87-7341dbe5a69c',
		site_area: 'North Fork',
		site_code: '004',
		site_name: 'Halfway',
		snow_free_date: new Date('5/31'),
		number_of_sites: 1,
		miles_from_trailhead: 5.6,
		site_elevation: 9340,
		elevation_gain: 1380,
		is_group_site: false,
		is_stock_site: false,
		has_privy: true,
		fires_allowed: true
	},
	{
		uuid: '5c64f8f6-7fab-49dc-8542-d1923640ac4c',
		site_area: 'Wild Basin',
		site_code: '049',
		site_name: 'Sandbeach Lake',
		snow_free_date: new Date('6/18'),
		number_of_sites: 4,
		miles_from_trailhead: 4.2,
		site_elevation: 10280,
		elevation_gain: 1970,
		is_group_site: false,
		is_stock_site: false,
		has_privy: false,
		fires_allowed: false
	},
	{
		uuid: '0e9f7321-cab0-4204-855e-54ccc81d1a72',
		site_area: 'Wild Basin',
		site_code: '049',
		site_name: 'Sandbeach Lake Group',
		snow_free_date: new Date('6/18'),
		number_of_sites: 1,
		miles_from_trailhead: 4.2,
		site_elevation: 10280,
		elevation_gain: 1970,
		is_group_site: true,
		is_stock_site: false,
		has_privy: false,
		fires_allowed: false
	},
	{
		uuid: '3f1b9b2a-09e0-4a18-a615-3a2f39dad642',
		site_area: 'Wild Basin',
		site_code: '052',
		site_name: 'Aspen Knoll Llama',
		snow_free_date: new Date('5/26'),
		number_of_sites: 1,
		miles_from_trailhead: 2.3,
		site_elevation: 9400,
		elevation_gain: 900,
		is_group_site: false,
		is_stock_site: true,
		has_privy: false,
		fires_allowed: false
	}
];

export const testReservations = [
	{
		user_uuid: '123ac246-e7ac-49ff-93b4-f7e94d997e6a',
		site_uuid: '5c64f8f6-7fab-49dc-8542-d1923640ac4c',
		reservation_date: new Date ('7/11/2020'),
		number_of_people: 4,
		trailhead_in: '',
		trailhead_out: '',
		license_plate_number: '123 ABC',
		license_plate_state: 'CO'
	},
	{
		user_uuid: '123ac246-e7ac-49ff-93b4-f7e94d997e6a',
		site_uuid: '5c64f8f6-7fab-49dc-8542-d1923640ac4c',
		reservation_date: new Date ('7/12/2020'),
		number_of_people: 4,
		trailhead_in: '',
		trailhead_out: '',
		license_plate_number: '123 ABC',
		license_plate_state: 'CO'
	},
	{
		user_uuid: '123ac246-e7ac-49ff-93b4-f7e94d997e6a',
		site_uuid: '5c64f8f6-7fab-49dc-8542-d1923640ac4c',
		reservation_date: new Date ('7/13/2020'),
		number_of_people: 4,
		trailhead_in: '',
		trailhead_out: '',
		license_plate_number: '123 ABC',
		license_plate_state: 'CO'
	}
];
