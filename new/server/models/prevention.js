var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PreventionSchema = new Schema({
  type: {
    type: String,
  },
  actions: {
    type: String,
  },
});

module.exports = mongoose.model("Prevention", PreventionSchema);
