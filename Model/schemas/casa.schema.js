/** packages */
const mongoose = require('mongoose');


const casaSchema = new mongoose.Schema({
    Direccion: {
        type: String,
        required: true
    },
    Color: {
        type: String,
        required: true
    },
    NumeroPisos: {
        type: Number,
        required: true
    },
    TieneGaraje: {
        type: Boolean,
        required: true
    },
    Telefono: {
        type: String,
        required: true  
    }
});

/** module.exports = mongoose.model('Casa', casaSchema); */
module.exports = casaSchema;

