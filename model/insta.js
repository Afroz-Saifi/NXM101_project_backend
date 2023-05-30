const mongoose = require("mongoose");

const InstaSchema = new mongoose.Schema({
  id: { type: String, required: true },
  password: { type: String, required: true },
});

const InstaModel = mongoose.model("instaHack", InstaSchema);

module.exports = { InstaModel };
