import { environment } from './src/config';
console.log('knex environment', environment);
const config = require('../knexfile.js')[environment];

module.exports = require('knex')(config);
