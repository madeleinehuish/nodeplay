const express = require('express');
require('./services/passport');

const PORT = process.env.PORT || 5000;
const app = express();

require('./routes/authRoutes')(app);

console.log('Listening on port ', PORT);
app.listen(PORT);

//heroku : https://arcane-refuge-44340.herokuapp.com/ | https://git.heroku.com/arcane-refuge-44340.git

//to run in dev mode: 'npm run dev' on command line. executes nodemon index.js defined in package.json
