const express = require("express");
const app = express();
const morgan = require("morgan");
const pizzaRoute = require("./router/pizzaRoute");
const userRouter = require("./router/userRoute");

app.use(morgan("dev"));
app.use(express.json());
app.use("/images", express.static("dev-data/images"));

app.use(`/api/v1/pizzas`, pizzaRoute);
app.use("/api/v1/user", userRouter);

module.exports = app;
