module.exports = (app) => {
	console.log('Loading routes of casa');
	app.get('/casa', (req, res, next) => {
		controller.getAll(req, res, next);
	});

	app.get('/casa/bydireccion/:direccion', (req, res, next) => {
		controller.getByDireccion(req, res, next);
	});

	app.put('/casa', (req, res, next) => {
		controller.updateCasa(req, res, next);
	});

	const controller = require('../controller/logic/casa.controller');

	app.post('/casa', (req, res, next) => {
		controller.createCasa(req, res, next);
	});

	app.delete('/casa', (req, res, next) => {
		controller.deleteCasa(req, res, next);
	});
};
