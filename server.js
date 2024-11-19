const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const posts = require("./posts");

app.use(express.static(path.join(__dirname, "img")));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json({
    count: posts.length,
    posts: posts,
  });
});

app.listen(port, () => {
  console.log(`Server attivo su http://localhost:${port}`);
});
