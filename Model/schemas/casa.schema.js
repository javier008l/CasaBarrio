/** packages */
const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');

const casaSchema = new mongoose.Schema({
	direccion: {
		type: 'String',
		required: true,
		unique: true
	},
	color: {
		type: 'String',
		required: true,
	},
	numeroPisos: {
		type: 'Number',
		required: true,
	},
	tieneGaraje: {
		type: 'Boolean',
		required: true,
		default: false,
	},
	nombrePro: {
		type: 'String',
		required: true,
	},
	telefono: {
		type: 'String',
		required: true,
	},
	numeroHabitaciones: {
		type: 'Number',
		required: true,
	},
	// casa_id: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'coll_casa',
	// 	required: true,
	// },
});

/** module.exports = mongoose.model('Casa', casaSchema); */
casaSchema.plugin(validator)
module.exports = casaSchema;
