
const express = require('express');
const pool = require("./db");
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.send('Hello World from Railway using a Db!');
});


app.get('/jokes', async (req, res) => {
  console.log(`DATABASE URL: ${process.env.Postgres.DATABASE_URL}`);
  const { rows } = await pool.query("SELECT * FROM jokes")

  res.json(rows)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(`db connection string ${pool.connectionString}`)
});
