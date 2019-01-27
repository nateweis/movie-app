const mongoose = require('mongoose');
const userShcema = new mongoose.Schema({
  username:{type:String, required:true, unique:true},
  password:{type:String, required:true}
})

const User = mongoose.model('Users',userShcema)
module.exports = User
