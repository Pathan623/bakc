const express = require("express");
const app = express();
const port = 3000
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twi", (req, res) => {
  res.send("<h1> pleased to meet you </h1>");
});

app.get("/yout", (req, res) => {
  res.send("<h4> this is a youtube  </h4>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
