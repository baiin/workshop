const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this will be our data base's data structure
const User = new Schema({
  _id: String,
  name: String,
  email: String,
  password: String
});
