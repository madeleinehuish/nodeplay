const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session'); //could also use express-session from npm but that is more complicated...
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User'); //this needs to be run first, before passport
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

//express middleware
app.use(
	cookieSession({
		maxAge : 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
)
app.use(passport.initialize());
app.use(passport.session());

//route handlers
require('./routes/authRoutes')(app);

//set up server to listen
const PORT = process.env.PORT || 5000;
console.log('Listening on port ', PORT);
app.listen(PORT);

//heroku : https://arcane-refuge-44340.herokuapp.com/ | https://git.heroku.com/arcane-refuge-44340.git

//to run in dev mode: 'npm run dev' on command line. executes nodemon index.js defined in package.json
