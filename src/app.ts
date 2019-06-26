import express = require("express");

import * as statusController from "./controllers/status";
const app = express();
const PORT = process.env.PORT || 9000;

app.set("port", process.env.PORT || 9000);

app.get("/", statusController.hello);
app.post("/wonderful", statusController.wonderful);

export default app;
