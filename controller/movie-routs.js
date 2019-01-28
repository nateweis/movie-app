const express = require('express');
const router = express.Router();
const Movie = require('../models/movies.js');

// opening index page
router.get('/',(req,res) => {
  Movie.find({},(err,data) => {
    res.render('./app/index.ejs',{allMovies:data,
    currentUser: req.session.currentUser})
  })
})

// category index page
router.get('/categories/:name',(req,res) => {
  Movie.find({},(err,data) => {
    res.render('./app/catigoryIndex.ejs',{
      allMovies:data,
      currentUser:req.session.currentUser,
      selectedCatigory:req.params.name
    })
  })
})

// special user index page
router.get('/userpg',(req,res) => {
  Movie.find({},(err,data) => {
    res.render('./app/userpg.ejs',{
      allMovies:data,
      currentUser: req.session.currentUser
    })
  })
})

// edit movie
router.get('/edit/:id',(req,res) => {
  Movie.findById(req.params.id, (err,data) => {
    res.render('./app/edit.ejs',{movie:data})
  })
})

// upload a movie create
router.get('/new',(req,res) => {
  res.render('./app/new.ejs')
})

// basic show page (watch movie pg)
router.get('/:id',(req,res) => {
  // im using a find rout instead of find by id bec i want to
  // keep the movie select nav bar active on everypage and i need access
  // to all movies for that
  Movie.find({}, (err,data) => {
    res.render('./app/show.ejs',{allMovies:data,
    selectedMovie:req.params.id})
  })
})






// ///////////// Not Get routs
router.post('/',(req,res) => {
  req.body.addedBy = req.session.currentUser.username;
  req.body.stars = Number(req.body.stars);
  Movie.create(req.body, (err,data) => {
    res.redirect('/movies/userpg')
  })
})

// delete the movie
router.delete('/:id',(req,res) => {
  Movie.findByIdAndRemove(req.params.id, (err,data) => {
    res.redirect('/movies/userpg')
  })
})

// edit movie
router.put('/:id',(req,res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body, (err,data) => {
    res.redirect('/movies/userpg')
  })
})






// /////////////////
// Seed Data
// //////////////////
const movieSeed = require('../models/seed.js')
router.get('/seed/extradata/exclusiveseed',(req,res) => {
  Movie.insertMany(movieSeed,(err,data) => {
    res.send(data)
  })
})

module.exports = router
