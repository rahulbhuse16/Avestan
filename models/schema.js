const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  bet: {
    type: String,
    required: true,
  },
  suit: {
    type: String,
    required: true,
  },
  coin:{
    type:Number,
    required:true
  }
});

module.exports = mongoose.model("Player", PlayerSchema);