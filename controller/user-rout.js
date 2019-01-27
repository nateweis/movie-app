const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user.js')


// adding user
router.post('/',(req,res) => {
  // encrypting the password
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err,data) => {
    res.redirect('/movies')
  })
})

// logging userin
router.post('/login',(req,res) => {
  User.findOne({username:req.body.username},(err,data) => {
    if(!data){res.send('<a href="/movies">Wrong Username</a>')}
    else if(bcrypt.compareSync(req.body.password, data.password)){
      req.session.currentUser = data;
      res.redirect('/movies')
    }else{
      res.send('<a href="/movies">Wrong Password</a>')
    }
  })
})

// logout
router.delete('/',(req,res) => {
  req.session.destroy(() => {
    res.redirect('/movies')
  })
})

module.exports = router
