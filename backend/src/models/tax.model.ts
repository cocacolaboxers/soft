import * as Sequelize from 'sequelize';
const conn = require('../database');

const Tax = conn.define('tax', {
	ID: {
		type: Sequelize.INTEGER,
	},
	Name: {
		type: Sequelize.TEXT,
	},
	Value: {
		type: Sequelize.NUMBER,
	},
});

module.exports = Tax;
