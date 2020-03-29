import * as Sequelize from 'sequelize';
const conn = require('../database');

export const Assign = conn.define('assigns', {
	ID: {
		type: Sequelize.INTEGER,
	},
	ID_Customer: {
		type: Sequelize.INTEGER,
	},
	ID_Employee: {
		type: Sequelize.INTEGER,
	},
	DescriptionTask: {
		type: Sequelize.TEXT,
	},
});

export const AssignView = conn.define('assignviews', {
	ID: {
		type: Sequelize.INTEGER,
	},
	FirstName: {
		type: Sequelize.TEXT,
	},
	LastName: {
		type: Sequelize.TEXT,
	},
	Email: {
		type: Sequelize.TEXT,
	},
	Address: {
		type: Sequelize.TEXT,
	},
	City: {
		type: Sequelize.TEXT,
	},
	Phone: {
		type: Sequelize.TEXT,
	},
});

// module.exports = Assign;
