const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ arcane: 'refuge'});
})

const PORT = process.env.PORT || 5000;
console.log('Listening on port ', PORT);

app.listen(PORT);

//heroku : https://arcane-refuge-44340.herokuapp.com/ | https://git.heroku.com/arcane-refuge-44340.git
