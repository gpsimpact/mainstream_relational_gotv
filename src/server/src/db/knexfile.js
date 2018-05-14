module.exports = {
  development: {
    // client: 'pg',
    // connection: {
    //   user: process.env.DATA_DB_USER,
    //   database: 'gonano',
    //   host: process.env.DATA_DB_HOST,
    //   password: process.env.DATA_DB_PASS,
    // },
    client: 'pg',
    connection: {
      user: process.env.HEROKU_PG_USER,
      database: process.env.HEROKU_PG_DATABASE,
      host: process.env.HEROKU_PG_HOST,
      password: process.env.HEROKU_PG_PASS,
      port: process.env.HEROKU_PG_PORT,
      ssl: true,
    },
  },
  test: {
    client: 'pg',
    connection: {
      user: process.env.DATA_DB_USER,
      database: 'gonano',
      host: process.env.DATA_DB_HOST,
      password: process.env.DATA_DB_PASS,
    },
  },
  production: {
    // client: 'pg',
    // // must use this for production as that is how heroku sets it automatically.
    // connection: process.env.HEROKU_PG,
    client: 'pg',
    connection: {
      user: process.env.HEROKU_PG_USER,
      database: process.env.HEROKU_PG_DATABASE,
      host: process.env.HEROKU_PG_HOST,
      password: process.env.HEROKU_PG_PASS,
      port: process.env.HEROKU_PG_PORT,
      ssl: true,
    },
  },
  dry: {
    // client: 'pg',
    // // must use this for production as that is how heroku sets it automatically.
    // connection: process.env.HEROKU_PG,
    client: 'pg',
    connection: {
      user: process.env.HEROKU_PG_USER,
      database: process.env.HEROKU_PG_DATABASE,
      host: process.env.HEROKU_PG_HOST,
      password: process.env.HEROKU_PG_PASS,
      port: process.env.HEROKU_PG_PORT,
      ssl: true,
    },
  },
};
