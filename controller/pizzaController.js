const qs = require("qs");
const Pizza = require("../modal/pizzaModal");

exports.getAllPizza = async (req, res) => {
  try {
    //fitering
    const parseQurey = qs.parse(req._parsedUrl.query);
    const queryObj = { ...parseQurey };

    const excludedFields = ["sort", "page", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );

    let query = Pizza.find(JSON.parse(queryString));

    if (req.query.sort) {
      console.log(req.query.sort);
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    }

    const pizzas = await query;
    res
      .status(200)
      .json({ status: "success", result: pizzas.length, data: { pizzas } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "invalid action" });
    console.log(err);
  }
};

exports.createPizza = async (req, res) => {
  try {
    const newPizza = await Pizza.create(req.body);
    res.status(200).json({ status: "success", data: { newPizza } });
  } catch (err) {
    res.status(404).json({ status: "fail", message: "invalid data" });
  }
};

exports.getPizza = async (req, res) => {
  try {
    const pizza = await Pizza.findById(req.params.id);
    res.status(200).json({ status: "success", data: { pizza } });
  } catch (err) {
    res.status(404).json({ status: "fail", message: "invalid data" });
  }
};

exports.updatePizza = async (req, res) => {
  console.log(req.params.id);
  try {
    const pizza = await Pizza.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({ status: "success", data: { pizza } });
  } catch (err) {
    res.status(404).json({ status: "fail", message: "invalid data" });
  }
};

exports.deletePizza = async (req, res) => {
  try {
    await Pizza.findByIdAndDelete(req.params.id);
    res.status(202).json({ status: "success", message: "item delete" });
  } catch (err) {
    console.log("deleting fail");
  }
};
