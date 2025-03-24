const express = require("express");
const app = express();
const server = require("http").createServer(app);

server.listen(137);

app.use(express.static(__dirname + "/../client"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/../client/index.html");
});
