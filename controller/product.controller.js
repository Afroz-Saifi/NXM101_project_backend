const { productModel } = require("../model/product.model");

const getAllProcucts = async (req, res) => {
  const { page, sort } = req.query;
  const pageNo = (page - 1) * 18;
  const min = req.query.min || -Infinity;
  const max = req.query.max || Infinity;
  let sortFilter = {};
  if (sort) {
    sortFilter.newprice = sort;
  }
  try {
    const productsData = await productModel
      .find({$and: [{newprice: {$lt: max}}, {newprice: {$gt: min}}]})
      .sort(sortFilter)
      .skip(pageNo)
      .limit(18);
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
