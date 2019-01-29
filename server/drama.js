const db = require('../db/db');
module.exports = {
	allDrama: (req, res, next) => {
		res.status(200).send({
			success: 'true',
			message: 'drama retrieved',
			types: db.drama
		});
	},
	uncommonDrama: (req, res, next) => {
		let uncommon = db.drama.filter((e) => {
			return e.common < 15 && e.common !== null;
		});
		let sortedUncommon = uncommon.sort(function(a, b) {
			return a.common - b.common;
		});
		res.status(200).send({
			success: 'true',
			message: 'drama retrieved',
			types: sortedUncommon
		});
	},
	commonDrama: (req, res, next) => {
		let common = db.drama.filter((e) => {
			return e.common > 30;
		});
		let sortedCommon = common.sort(function(a, b) {
			return b.common - a.common;
		});
		res.status(200).send({
			success: 'true',
			message: 'drama retrieved',
			types: sortedCommon
		});
	}
};
