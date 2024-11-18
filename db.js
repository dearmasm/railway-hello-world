// In db.js
const { Pool } = require("pg");


// The secret connection string you copied earlier
const connectionString =
  process.env.DATABASE_URL;

// The secret connection string you copied earlier
//const connectionString = process.env.Postgres.DATABASE_URL;

const pool = new Pool({
  connectionString : process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },  
});

pool.connect();

module.exports = pool;

