const express = require("express");
const pizzaController = require("../controller/pizzaController");
const router = express.Router();

router
  .route("/")
  .get(pizzaController.getAllPizza)
  .post(pizzaController.createPizza);

router
  .route("/:id")
  .get(pizzaController.getPizza)
  .patch(pizzaController.updatePizza)
  .delete(pizzaController.deletePizza);
module.exports = router;
