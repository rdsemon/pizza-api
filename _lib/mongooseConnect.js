const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

const main = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Connection successfull");
  } catch (err) {
    console.log("Connection fail from lib");
    console.log(err);
  }
};

module.exports = main;
