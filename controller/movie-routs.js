const express = require('express');
const router = express.Router();
const Movie = require('../models/movies.js');

// opening index page
router.get('/',(req,res) => {
  Movie.find({},(err,data) => {
    res.render('./app/index.ejs',{allMovies:data})
  })
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
