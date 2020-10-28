# reservation-api

## Description

An API used to manage reservations for campsites. Created with TypeScript, NestJS, TypeORM and PostgreSQL.

## Installation

Install Docker Desktop for accessing the dev database: https://hub.docker.com/editions/community/docker-ce-desktop-windows/

Install packages:
```bash
$ npm install
```

Create a .env file with the following for localhost development:
````
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=mysecretpassword
POSTGRES_DATABASE=reservation_database
PORT=3001
MODE=DEV
RUN_MIGRATIONS=true
````

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources
* NestJS, TypeORM and PostgreSQL API setup: https://medium.com/@gausmann.simon/nestjs-typeorm-and-postgresql-full-example-development-and-project-setup-working-with-database-c1a2b1b11b8f
* NestJS: https://docs.nestjs.com/first-steps
* TypeORM: https://typeorm.io/#/
* Download PostgreSQL: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
* Download Docker Desktop: https://hub.docker.com/editions/community/docker-ce-desktop-windows/

TODO: delete if not used
* Setup babel https://www.robinwieruch.de/minimal-node-js-babel-setup
* Setup dotenv: https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
