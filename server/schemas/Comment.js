const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this will be our data base's data structure
const Comment = new Schema({
  _id: String,
  name: String,
  email: String,
  movie_id: String,
  text: String,
  date: Date
});
