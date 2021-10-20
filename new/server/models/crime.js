var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CrimeSchema = new Schema({
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },
  type: {
    type: String,
  },
  criminal_relationship: {
    type: String,
  },
  behavior: {
    type: String,
  },
  evidence: {
    type: String,
  },
});

module.exports = mongoose.model("Crime", CrimeSchema);
