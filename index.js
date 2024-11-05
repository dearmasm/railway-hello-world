import pg from "pg";

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.send('Hello World from Railway using a Db!');
});

const pool = new pg.Pool();

app.get('/jokes', async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM jokes")

  res.json(rows)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
