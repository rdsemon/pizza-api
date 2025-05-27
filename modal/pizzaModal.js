const mongoose = require("mongoose");
const mongooseConnect = require("../_lib/mongooseConnect");

mongooseConnect();

const pizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "A pizza must have a name"],
    unique: true,
  },
  price: {
    type: Number,
    require: [true, "A pizza must have a price"],
  },
  ingredints: {
    type: [String],
    require: [true, "A pizza must have some ingredints"],
  },
  stock: {
    type: Boolean,
    require: true,
  },
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
