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
      data.favorites[0] = "Z";
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

// remove from favorites
router.put('/fave/:id/:name',(req,res) => {
  User.findOneAndUpdate({username:req.params.id}, {$pull:{favorites:req.params.name}},{new:true},(err,data) => {
    req.session.currentUser = data;
    res.redirect('back')
  })
})

// add to favorites
router.put('/:id/:name',(req,res) => {

  User.findOneAndUpdate({username:req.params.id}, {$push:{favorites:req.params.name}},{new:true},(err,data) => {
    req.session.currentUser = data;
    res.redirect('back')
  })
})





module.exports = router
