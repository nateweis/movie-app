# GiVids
The format of a video sharing app

## How to use
### Locating a movie
+ Go to https://givids.herokuapp.com/movies
+ click `search` and traverse the search options to find the movie that you like
+ click the movie or your choice to take you to the viewing page

### If the movie you want isn't there
We are sorry for the inconvenience we will do what we can to put up the movie of your choice as soon as possible.

Movie donations are always welcome. To donate simply sign up as a user.

### User Benefits
Users have access to the user home page where they can:
+ upload any video of their choosing
+ edit their videos
+ and remove their videos

Users also have the option to save videos as their favorites for viewing at anytime

## Project Components
This is a full backend developed web app. It runs on `node.js` and uses `mongodb` for database.    
The 4 main folders used for this project are:
+ The controller = where the webpage routs are
+ the model = where the data is formed for storage
+ public = which holds the frontend style and functionality
+ views = where the frontend page rendering is

#### Server.js
This is the file that connects all the other files.    
The dependencies that were used on `server.js` are:
+ `express`
+ `method-override`
+ `dotenv`
+ `mongoose`
+ `express-session`
+ `bcrypt`
+ `ejs`
+ `nodemon`
