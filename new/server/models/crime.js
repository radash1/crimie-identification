var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CrimeSchema = new Schema({
  Vname: {
    type: String,
  },
  Vage: {
    type: String,
  },
  Sname: {
    type: String,
  },
  Sage: {
    type: String,
  },
  Vrel: {
    type: String,
  },
  behaviour: {
    type: String,
  },
  evidence: {
    type: String,
  },
  entered: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Crime", CrimeSchema);
