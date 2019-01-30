const db = require('../db/db');
module.exports = {
	allTypes: (req, res) => {
		res.status(200).send({
			success: 'true',
			message: 'types retrieved',
			types: db.types
		});
	},
	byName: (req, res) => {
		const name = req.params.name.toLowerCase();
		const nameQuery = db.types.filter((e) => {
			return e.name.includes(name) || e.alias.includes(name);
		})[0];
		const allyStudentQuery = db.types.filter(
			(e) => e.role == 'student' && e.drive !== nameQuery.drive
		);
		const allyOutlierQuery = db.types.filter(
			(e) => e.role == 'outlier' && e.drive !== nameQuery.drive
		);
		const allyMasterQuery = db.types.filter(
			(e) => e.role == 'master' && e.drive !== nameQuery.drive
		);
		const opponentDriveQuery = db.types.filter(
			(e) => e.drive == nameQuery.drive
		);
		const opponentAspectQuery = db.types.filter(
			(e) => e.aspect == nameQuery.aspect
		);
		const opponentMethodQuery = db.types.filter(
			(e) => e.method == nameQuery.method
		);
		const opponentRoleQuery = db.types.filter((e) => e.role == nameQuery.role);
		const opponents = {
			driveOpponents: opponentDriveQuery,
			aspectOpponents: opponentAspectQuery,
			methodOpponents: opponentMethodQuery,
			roleOpponents: opponentRoleQuery
		};
		const allies = {
			opposing: {
				studentAllies: allyStudentQuery.filter(
					(e) => e.drive == db.allyMatrix[nameQuery.drive]
				),
				outlierAllies: allyOutlierQuery.filter(
					(e) => e.drive == db.allyMatrix[nameQuery.drive]
				),
				masterAllies: allyMasterQuery.filter(
					(e) => e.drive == db.allyMatrix[nameQuery.drive]
				)
			},
			adjacent: {
				studentAllies: allyStudentQuery.filter(
					(e) => e.drive !== db.allyMatrix[nameQuery.drive]
				),
				outlierAllies: allyOutlierQuery.filter(
					(e) => e.drive !== db.allyMatrix[nameQuery.drive]
				),
				masterAllies: allyMasterQuery.filter(
					(e) => e.drive !== db.allyMatrix[nameQuery.drive]
				)
			}
		};
		const result = { hero: nameQuery, opponents: opponents, allies: allies };
		res.status(200).send({
			success: 'true',
			message: `archetype of ${name} retrieved`,
			types: result
		});
	},
	byRole: (req, res) => {
		const role = req.params.role.toLowerCase();
		const roleQuery = db.types.filter((e, i) => {
			return e.role == role;
		});
		res.status(200).send({
			success: 'true',
			message: `archetype of ${role} retrieved`,
			types: roleQuery
		});
	},
	byAspect: (req, res) => {
		const aspect = req.params.aspect.toLowerCase();
		const aspectQuery = db.types.filter((e, i) => {
			return e.aspect == aspect;
		});
		res.status(200).send({
			success: 'true',
			message: `archetype of ${aspect} retrieved`,
			types: aspectQuery
		});
	},
	byDrive: (req, res) => {
		const drive = req.params.drive.toLowerCase();
		const driveQuery = db.types.filter((e, i) => {
			return e.drive == drive;
		});
		res.status(200).send({
			success: 'true',
			message: `archetype of ${drive} retrieved`,
			types: driveQuery
		});
	},
	byMethod: (req, res) => {
		const method = req.params.method.toLowerCase();
		const methodQuery = db.types.filter((e, i) => {
			return e.method == method;
		});
		res.status(200).send({
			success: 'true',
			message: `archetype of ${method} retrieved`,
			types: methodQuery
		});
	},
	byShadow: (req, res) => {
		const shadow = req.params.shadow.toLowerCase();
		const shadowQuery = db.types.filter((e, i) => {
			return e.shadow == shadow;
		});
		res.status(200).send({
			success: 'true',
			message: `archetype of ${shadow} retrieved`,
			types: shadowQuery
		});
	},
	getOpponents: (req, res) => {
		const name = req.params.name.toLowerCase();
		const nameQuery = db.types.filter((e) => {
			return e.name.includes(name) || e.alias.includes(name);
		})[0];
		const opponentDriveQuery = db.types.filter(
			(e) => e.drive == nameQuery.drive
		);
		const opponentAspectQuery = db.types.filter(
			(e) => e.aspect == nameQuery.aspect
		);
		const opponentMethodQuery = db.types.filter(
			(e) => e.method == nameQuery.method
		);
		const opponentRoleQuery = db.types.filter((e) => e.role == nameQuery.role);
		const opponents = {
			driveOpponents: opponentDriveQuery,
			aspectOpponents: opponentAspectQuery,
			methodOpponents: opponentMethodQuery,
			roleOpponents: opponentRoleQuery,
			shadowOpponents: [nameQuery]
		};

		const result = { opponents: opponents };
		res.status(200).send({
			success: 'true',
			message: `opponents of ${name} retrieved`,
			types: result
		});
	},
	getAllies: (req, res) => {
		const name = req.params.name.toLowerCase();
		const nameQuery = db.types.filter((e) => {
			return e.name.includes(name) || e.alias.includes(name);
		})[0];
		const allyStudentQuery = db.types.filter(
			(e) => e.role == 'student' && e.drive !== nameQuery.drive
		);
		const allyOutlierQuery = db.types.filter(
			(e) => e.role == 'outlier' && e.drive !== nameQuery.drive
		);
		const allyMasterQuery = db.types.filter(
			(e) => e.role == 'master' && e.drive !== nameQuery.drive
		);
		const allies = {
			adjacent: {
				studentAllies: allyStudentQuery.filter(
					(e) => e.drive !== db.allyMatrix[nameQuery.drive]
				),
				outlierAllies: allyOutlierQuery.filter(
					(e) => e.drive !== db.allyMatrix[nameQuery.drive]
				),
				masterAllies: allyMasterQuery.filter(
					(e) => e.drive !== db.allyMatrix[nameQuery.drive]
				)
			},
			opposing: {
				studentAllies: allyStudentQuery.filter(
					(e) => e.drive == db.allyMatrix[nameQuery.drive]
				),
				outlierAllies: allyOutlierQuery.filter(
					(e) => e.drive == db.allyMatrix[nameQuery.drive]
				),
				masterAllies: allyMasterQuery.filter(
					(e) => e.drive == db.allyMatrix[nameQuery.drive]
				)
			}
		};
		const result = { allies: allies };
		res.status(200).send({
			success: 'true',
			message: `allies of ${name} retrieved`,
			types: result
		});
	}
};
