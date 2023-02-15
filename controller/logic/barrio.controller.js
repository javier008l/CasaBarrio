/**Dto */

const barrioDto = require('../model/dto/barrio.dto');
const config = require('config');

/** Helper */
const notHelper = require('../helpers/notification.helper');

exports.creatBarrio = (req, res, next) => {
    let barrio = {
        ciudad: req.body.document,
        localidad: req.body.localidad,
        nombre: req.body.nombre,
        estrato: req.body.estrato,
    };

    barrioDto.create(barrio, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }

        let = vencindario = {
            ciudad: barrio.ciudad,
            localidad: barrio.localidad,
            nombre: barrio.nombre,
            estrato: barrio.estrato,
        };
        vencindarioDto.create(user, (err, u) => {
            if (err) {
                barrioDto.delete({ _id: data._id }, (e, data) => { });
                return res.status(400).json({
                    error: err,
                });
            }
            notHelper.sendSMS(barrio.phone);
            res.status(201).json({ info: data });
        });
    });
};

exports.updateBarrio = (req, res, next) => {
    let barrio = {
        ciudad: req.body.ciudad,
        localidad: req.body.localidad,
        nombre: req.body.nombre,
        estrato: req.body.estrato,
    };

    barrioDto.update({ _id: req.body.id }, barrio, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(201).json({ info: data });
    });
};

exports.getAll = (req, res, next) => {
    barrioDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(200).json({ info: data });
    });
};

exports.getByDocument = (req, res, next) => {
    teacherDto.getByDocument({ document: req.params.document }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(200).json({ info: data });
    });
};

exports.deleteBarrio = () => {
    barrioDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(204).json();
    });
};
