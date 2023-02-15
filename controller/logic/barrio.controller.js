/**Dto */
const barrioDto = require('../../Model/dto/barrio.dto');
const config = require('config');

exports.createBarrio = (req, res, next) => {
	let barrio = {
		ciudad: req.body.ciudad,
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

		barrioDto.create(barrio, (err, u) => {
			if (err) {
				barrioDto.delete({ _id: data._id }, (e, data) => {});
				return res.status(400).json({
					error: err,
				});
			}
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

	barrioDto.updateOne({ _id: req.body.id }, barrio, (err, data) => {
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

exports.getByCiudad = (req, res, next) => {
	teacherDto.getByCiudad({ ciudad: req.params.ciudad }, (err, data) => {
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
