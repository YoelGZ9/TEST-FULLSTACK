const productsData = require("./data/products");
import Car from "./models/Car";

import "./database";

const importData = async () => {
  try {
    await Car.deleteMany({});
    await Car.insertMany(productsData);
    console.log("Data Import Success");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
