/** Packages */
const mongoose = require('mongoose');

const barrioSchema = new mongoose.Schema({
	ciudad: {
		type: 'String',
		required: true,
	},
	localidad: {
		type: 'String',
		required: true,
	},
	nombre: {
		type: 'String',
		required: true,
	},
	estrato: {
		type: 'Number',
		required: true,
	},
});

module.exports = barrioSchema;
