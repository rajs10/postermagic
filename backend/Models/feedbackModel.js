const { Schema, model } = require("../connection");

const myschema = new Schema({
  name: String,
  rating: String,
  userfeedback: String,
});
module.exports = model("feedback", myschema);
