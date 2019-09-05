const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this will be our data base's data structure
const UserSchema = new Schema({
  id: String,
  name: String,
  email: String,
  password: String
});
