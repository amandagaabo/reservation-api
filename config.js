import 'dotenv/config';

module.exports = {
  databaseUrl: process.env.DATABASE_URL,
  environment: process.env.NODE_ENV,
  port: process.env.PORT
};
