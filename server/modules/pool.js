// Node Module that will connect to postgesql
const pg = require('pg');
const url = require('url');

let config = {};

// ---- Heroku or Default Config ----- //
if (process.env.DATABASE_URL) {
    // Heroku gives a url, not a connection object
    // https://github.com/brianc/node-pg-pool
    const params = url.parse(process.env.DATABASE_URL);

    config = {
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: { rejectUnauthorized: false },
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
      };
    
    } else {
      config = {
        host: process.env.DATABASE_SERVER     || 'localhost', // Server hosting the postgres database
        port: process.env.DATABASE_PORT       || 5432, //env var: PGPORT
        database: process.env.DATABASE_NAME   || 'tinker', //env var: PGDATABASE or the name of your database (e.g. database: process.env.DATABASE_NAME || 'koala_holla',)
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
      };
}

// this creates the pool that will be shared by all other modules
const pool = new pg.Pool(config);

// Listener setup on the pool isn't required, 
// but can be super handy for troubleshooting.
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
    process.exit(-1);
});

module.exports = pool;
