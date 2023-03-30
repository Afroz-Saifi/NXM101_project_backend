const express = require("express");
const { productModel } = require("../model/product.model");
const productsRouter = express.Router();

productsRouter.get("/", async (req, res) => {
  try {
    const productsData = await productModel.find();
    if (productsData.length == 0) {
      return res.status(404).json({ msg: "products not found" });
    } else {
      return res.status(200).json(productsData);
    }
  } catch (error) {
    return res.status(400).json({ err: error });
  }
});

module.exports = { productsRouter };
