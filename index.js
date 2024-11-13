
const express = require('express');
const pool = require("./db");
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.send('Hello World from Railway using a Db!');
});

app.get('/jokes', async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM jokes")

  res.json(rows)
})

app.get("/posts", async (req, res) => {
  const posts = await pool.query("SELECT * FROM posts;");
  res.send({ posts });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
