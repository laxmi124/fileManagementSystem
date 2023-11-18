const express = require("express");
const PORT = 8000;
let app = express();

app.get("/users", (req, res) => {
  res.send("Get All users");
});

module.exports = {
  app,
};