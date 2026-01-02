const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Letter Schema MongoDb
const letterSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  letter: {
    type: String,
    require: true,
  },
  delivery: {
    type: String,
    require: true,
  },
  audience: {
    type: String,
    require: true,
  },
  createdAt: {
    type: String,
    require: true,
  },
});
