const fs = require("fs");
const Pizza = require("../../modal/pizzaModal");
const pizzas = JSON.parse(fs.readFileSync(`${__dirname}/pizza.json`, "utf-8"));

const importPizza = async () => {
  try {
    await Pizza.create(pizzas);
    console.log("Pizza successfully loaded");
  } catch (err) {
    console.log("Fail to load pizza");
  }
};

const deletePizza = async () => {
  try {
    await Pizza.deleteMany();
    console.log("Pizza deleting successfull");
  } catch (err) {
    console.log("Fail to delete pizza");
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importPizza();
} else if (process.argv[2] === "--delete") {
  deletePizza();
}
