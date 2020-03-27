import * as Sequelize from 'sequelize';
const conn = require('../database');

const Status = conn.define('status', {
	ID: {
		type: Sequelize.INTEGER,
	},
	Description: {
		type: Sequelize.TEXT,
	},
	Value: {
		type: Sequelize.INTEGER,
	},
});

module.exports = Status;
