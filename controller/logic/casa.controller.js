/** Dto */
// const dto = require('../../model/dto/casa.dto');
// const config = require('config');

exports.createCasa = (req, res, next) => {
	let std = {
		direccion: req.body.direccion,
		color: req.body.color,
		numeroPisos: req.body.numeroPisos,
		tieneGaraje: req.body.tieneGaraje,
		nombrePro: req.body.nombrePro,
		telefono: req.body.telefono,
		numeroHabitaciones: req.body.telefono,
	};

	casaDto.save(std, (err, data) => {
		if (err) {
			return res.status(400).json({
				error: err,
			});
		}
	});
};

exports.updatecasa = (req, res, next) => {
	let std = {
		direccion: req.body.direccion,
		color: req.body.color,
		numeroPisos: req.body.numeroPisos,
		tieneGaraje: req.body.tieneGaraje,
		nombrePro: req.body.nombrePro,
		telefono: req.body.telefono,
		numeroHabitaciones: req.body.telefono,
	};

	casaDto.update({ _id: req.body.id }, std, (err, data) => {
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

exports.getByCode = (req, res, next) => {
	casaDto.getByCode({ code: req.params.direccion }, (err, data) => {
		if (err) {
			return res.status(400).json({
				error: err,
			});
		}
		res.status(200).json({ info: data });
	});
};

exports.deleteCasa = () => {
	studentDto.delete({ _id: req.body.direccion }, (err, data) => {
		if (err) {
			return res.status(400).json({
				error: err,
			});
		}
		res.status(204).json();
	});
};
