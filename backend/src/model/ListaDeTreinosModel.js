const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  macaddress: { type: String, required: true },
  type: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  done: { type: Boolean, default: false },
  created: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("ListaDeTreinos", ListSchema);
