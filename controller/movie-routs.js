const express = require('express');
const router = express.Router();
// const Movie = require('../models/movies.js');

// opening index page
router.get('/',(req,res) => {
  res.render('./app/index.ejs')
})

// basic show page
router.get('/:id',(req,res) => {
  res.render('./app/show.ejs')
})


module.exports = router
