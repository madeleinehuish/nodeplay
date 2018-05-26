const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User'); //this needs to be run first, before passport
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
console.log('Listening on port ', PORT);
app.listen(PORT);

//heroku : https://arcane-refuge-44340.herokuapp.com/ | https://git.heroku.com/arcane-refuge-44340.git

//to run in dev mode: 'npm run dev' on command line. executes nodemon index.js defined in package.json
