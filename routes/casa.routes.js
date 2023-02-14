module.exports = (app) => {
    console.log('Loading routes of casa');
    app.get('/casa', (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get('/casa/bycode/:code', (req, res, next) => {
        controller.getByCode(req, res, next);
    });

    app.put('/casa', (req, res, next) => {
        controller.updateStudent(req, res, next);
    });

    const controller = require('../controller/logic/casa.controller');

    app.post('/casa', (req, res, next) => {
        controller.createStudent(req, res, next);
    });

    app.delete('/casa', (req, res, next) => {
        controller.deleteStudent(req, res, next);
    });
};