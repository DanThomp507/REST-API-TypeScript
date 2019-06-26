import express = require("express");

const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server is up and listening on ${PORT}`);
});


export default app;
