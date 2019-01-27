const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
  title: {type: String, required:true},
  stars:{type: Number, min:1 , max:5},
  writer:String,
  starring:[String],
  img:[String],
  catigory:[String],
  favoites:{type:Boolean, default:false},
  runtime:{type:Number, default:130},
  movieDescription: String,
  addedBy:String,
  year: {type:Number, default:2019},
  rated:String
})

const Movie = mongoose.model('movies', movieSchema);
module.exports = Movie;
