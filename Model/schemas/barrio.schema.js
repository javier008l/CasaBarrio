/** Packages */

const Mongoose = require('mongoose');

const barrioSchema = new Mongoose.Schema({
    Ciudad: { 
        type: String,
        required: true
    },
    Localidad: {    
        type: String,
        required: true
    },
    Nombre: {
        type: String,
        required: true
    }
});

module.exports = barrioSchema;





