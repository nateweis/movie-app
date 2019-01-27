const express = require('express');
const router = express.Router();
const Movie = require('../models/movies.js');

// opening index page
router.get('/',(req,res) => {
  Movie.find({},(err,data) => {
    res.render('./app/index.ejs',{allMovies:data})
  })
})

// basic show page
router.get('/:id',(req,res) => {
  res.render('./app/show.ejs')
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
