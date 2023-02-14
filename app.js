/** packages */
const express = require('express');
const config = require('config');

/** app configuration */
const app = express();
const port = config.get('server-port');

/** Methods */
app.get('/', (req, res, next) => {
	res.send('Welcome to academic rest api');
});

const controller = require('./controller/logic/casa.controller');

app.get('/casa', (req, res, next) => {
	controller.getAll(req, res, next);
});

app.listen(port, () => {
	console.log('server is running on port');
});
