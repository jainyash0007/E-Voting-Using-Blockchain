const mongoose = require('mongoose')
const VoterSchema = new mongoose.Schema({
    name: String,
    aadharno: Number,
    phoneno: Number,
    age: Number,
  });
  const voter = mongoose.model("voterdata", VoterSchema);
  module.exports=voter