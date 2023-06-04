const { Types } = require("mongoose");
const { Schema, model } = require("../connection");

const myschema = new Schema({
  image: String,
  user: { type: Types.ObjectId, ref: "users" },
  createdAt: Date,
});
module.exports = model("image", myschema);
