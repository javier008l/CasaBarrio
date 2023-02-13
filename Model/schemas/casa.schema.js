/** packages */
const mongoose = require('mongoose');


const casaSchema = new mongoose.Schema({
    direccion: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    numeroPisos: {
        type: Number,
        required: true
    },
    tieneGaraje: {
        type: Boolean,
        required: true
    },
    telefono: {
        type: String,
        required: true  
    },
    numeroHabitaciones: {
        type: Number,
        required: true
    },
    casa_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coll Casas",
        required: true
    },
});

/** module.exports = mongoose.model('Casa', casaSchema); */
module.exports = casaSchema;

