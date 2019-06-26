"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const statusController = require("./controllers/status");
const app = express();
const PORT = process.env.PORT || 9000;
app.set("port", process.env.PORT || 9000);
app.get("/", statusController.hello);
app.post("/wonderful", statusController.wonderful);
exports.default = app;
//# sourceMappingURL=app.js.map