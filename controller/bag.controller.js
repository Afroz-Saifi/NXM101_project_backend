const { bagModel } = require("../model/bag.model");
const jwt = require("jsonwebtoken");

const add_to_bag = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "fw24_605");
  req.body.userId = decoded.userId;
  const bag_data = new bagModel(req.body);
  try {
    await bag_data.save();
    return res.status(201).json({ success: "added to cart successfully" });
  } catch (error) {
    return res.status(400).json({ err: error });
  }
};
const get_bags = async (req, res) => {};
const delete_bag = async (req, res) => {};

module.exports = { add_to_bag, get_bags, delete_bag };
