
const express = require('express');
const pool = require("./db");
const app = express();

const port = process.env.PORT || 3000;

var counter=0;

app.get('/', (req, res) => {
  counter++;

  // Create an HTML response with the counter value
  const htmlResponse = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Hello World from Railway!</title>
    </head>
    <body>
      <h1>Hello World from Railway!</h1>
      <h1>Counter: ${counter}</h1>
    </body>
    </html>
  `; 

    return res.send(htmlResponse);
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
    console.log(connectionString);
});
