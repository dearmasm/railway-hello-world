// In db.js
const { Pool } = require("pg");

// The secret connection string you copied earlier
const connectionString = process.env.Postgres.DATABASE_URL;

const pool = new Pool({
  connectionString,
});

module.exports = pool;
