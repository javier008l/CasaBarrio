/**Packages */
const mongoose = require('mongoose');

/** usando schema */
const schema = require('../schemas/barrio.schema');

schema.statics = {
	create: function (data, cb) {
		let doc = new this(data);
		doc.save(cb);
	},
	getAll: function (query, cb) {
		this.find(query, cb);
	},
	getByCiudad: function (query, cb) {
		this.find(query, cb);
	},
	update: function (query, data, cb) {
		this.findOneAndUpdate(query, { $set: data }, { new: true }, cb);
	},
	delete: function (query, cb) {
		this.findOneAndDelete(query);
	},
};

const dto = mongoose.model('coll_barrio', schema);
module.exports = dto;
