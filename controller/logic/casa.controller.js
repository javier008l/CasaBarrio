/** Dto */
const casaDto = require('../../Model/dto/casa.dto');

/**Helper */
const nothelper = require('../helpers/notification.helper');
// const config = require('config');

exports.createCasa = (req, res, next) => {
	let casa = {
		direccion: req.body.direccion,
		color: req.body.color,
		numeroPisos: req.body.numeroPisos,
		tieneGaraje: req.body.tieneGaraje,
		nombrePro: req.body.nombrePro,
		telefono: req.body.telefono,
		numeroHabitaciones: req.body.numeroHabitaciones,
	};
	console.log(casa);
	casaDto.create(casa, (err, data) => {
		if (err) {
			return res.status(400).json({
				error: err,
			});
		}

		casaDto.create(casa, (err, data) => {
			if (err) {
				casaDto.delete({ _id: data._id }, (e, data) => {});
				return res.status(400).json({
					error: err,
				});
			}
			nothelper.sendSMS(casa.telefono);
			res.status(201).json({ info: data });
		});
	});

	exports.updatecasa = (req, res, next) => {
		let casa = {
			direccion: req.body.direccion,
			color: req.body.color,
			numeroPisos: req.body.numeroPisos,
			tieneGaraje: req.body.tieneGaraje,
			nombrePro: req.body.nombrePro,
			telefono: req.body.telefono,
			numeroHabitaciones: req.body.numeroHabitaciones,
		};

		casaDto.updateOne({ _id: req.body.id }, casa, (err, data) => {
			if (err) {
				return res.status(400).json({
					error: err,
				});
			}
			res.status(201).json({ info: data });
		});
	};

	exports.getAll = (req, res, next) => {
		casaDto.getAll({}, (err, data) => {
			if (err) {
				return res.status(400).json({
					error: err,
				});
			}
			res.status(200).json({ info: data });
		});
	};

	exports.getByDireccion = (req, res, next) => {
		casaDto.getByDireccion({ direccion: req.params.direccion }, (err, data) => {
			if (err) {
				return res.status(400).json({
					error: err,
				});
			}
			res.status(200).json({ info: data });
		});
	};

	exports.deleteCasa = () => {
		casaDto.delete({ _id: req.body.direccion }, (err, data) => {
			if (err) {
				return res.status(400).json({
					error: err,
				});
			}
			res.status(204).json();
		});
	};
};
