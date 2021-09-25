const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title:{type: String, required:true},
  author:String,
  summary:{type: String, required:true},
  genre:{type: String, required:true},
  country:String,
  length:String,
  link:String
});

module.exports = mongoose.model("Book", bookSchema);
