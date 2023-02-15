module.exports = (app) => {
    console.log('Loading routes of barrio');
    app.get('/barrio', (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get('/barrio/bydocument/:document', (req, res, next) => {
        controller.getByDocument(req, res, next);
    });

    app.put('/barrio', (req, res, next) => {
        controller.updateteacher(req, res, next);
    });

    const controller = require('../controller/logic/barrio.controller');

    app.post('/barrio', (req, res, next) => {
        controller.createTeacher(req, res, next);
    });

    app.delete('/barrio', (req, res, next) => {
        controller.deleteteacher(req, res, next);
    });
};