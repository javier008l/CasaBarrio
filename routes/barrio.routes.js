module.exports = (app) => {
	console.log('Loading routes of barrio');
	app.get('/barrio', (req, res, next) => {
		controller.getAll(req, res, next);
	});

	app.get('/barrio/byciudad/:ciudad', (req, res, next) => {
		controller.getByCiudad(req, res, next);
	});

	app.put('/barrio', (req, res, next) => {
		controller.updatebarrio(req, res, next);
	});

	const controller = require('../controller/logic/barrio.controller');

	app.post('/barrio', (req, res, next) => {
		controller.createBarrio(req, res, next);
	});

	app.delete('/barrio', (req, res, next) => {
		controller.deletebarrio(req, res, next);
	});
};
