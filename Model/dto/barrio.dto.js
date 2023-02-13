/**Packages */
const Mongoose = require('mongoose');

/** usando schema */
const  schema = require("../schemas/barrio.schema");

schema.statics = {
    create: function(data, cb) {
        let doc = new this(data);
        doc.save(cb);
    },
    getAll: function(query, cb) {
        this.find(query, cb);
    },
    getByCode: function(query, cb) {
        this.find(query, cb);
    },
    update: function(query, updateData, cb) {
        this.findByIdAndUpdate(query, {$set: data}, {new: true}, cb);
    },
    delete: function(query, cb) {
        this.findOneAndDelete(query, cb);
    }

}