const express = require("express");
const app = express();
const morgan = require("morgan");
const pizzaRoute = require("./router/pizzaRoute");

app.use(morgan("dev"));
app.use(express.json());

app.use(`/api/v1/pizzas`, pizzaRoute);

module.exports = app;
