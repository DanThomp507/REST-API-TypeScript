import express = require("express");

const app = express();
const PORT = process.env.PORT || 9000;

app.set("port", process.env.PORT || 9000);

app.get("/", (req, res) => {
  res.send("Home page");
});

export default app;
