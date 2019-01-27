// dotenv
require('dotenv').config()

// express
const express = require('express');
const app = express();
const port = process.env.PORT;

// sessions
const session = require('express-session')

// method override
const methodOverride = require('method-override');

// mongoose
const mongoose = require('mongoose');
const db = mongoose.connection;
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI, { useNewUrlParser: true});
// check mongoose connection
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open',() => {
  console.log("connection made");
})


// middlewhere
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(session({
  secret:process.env.SECRET,
  resave:false,
  saveUninitialized: false
}))

// the routs
// main
const movieRouts = require('./controller/movie-routs.js');
app.use('/movies',movieRouts)

// user add
const userRouts = require('./controller/user-rout.js')
app.use('/user',userRouts)



app.listen(port,() => {
  console.log("Ready for some routs......");
})
