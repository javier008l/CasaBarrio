/** Packages */

const Mongoose = require('mongoose');

const barrioSchema = new Mongoose.Schema({
    ciudad: { 
        type: String,
        required: true
    },
    localidad: {    
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    estrato: { 
        type: Number,
        required: true
    }
});

module.exports = barrioSchema;





