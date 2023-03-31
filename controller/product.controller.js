const { productModel } = require("../model/product.model");

const getAllProcucts = async (req, res) => {
  const { page } = req.query;
  const pageNo = (page-1) * 18
  try {
    const productsData = await productModel.find().skip(pageNo).limit(18);
    if (productsData.length == 0) {
      return res.status(404).json({ msg: "products not found" });
    } else {
      return res.status(200).json(productsData);
    }
  } catch (error) {
    return res.status(400).json({ err: error });
  }
};

module.exports = { getAllProcucts };
