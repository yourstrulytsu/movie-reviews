const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moviereviewSchema = new Schema({
    moviename:  {  type:  String, required:  true, trim: true}, 
    moviereview:  { type:  String, required:  true, trim: true},
  }
);
const MovieReview = mongoose.model('moviereview',moviereviewSchema);
module.exports = MovieReview;