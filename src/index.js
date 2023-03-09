const express = require("express");
const server = express();
const morgan = require("morgan");
const routes = require("./routes/index.js");

// middlewares
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use("/", routes);

module.exports = server;
