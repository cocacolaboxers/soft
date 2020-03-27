import * as Sequelize from 'sequelize';
const conn = require('../database');

const Customer = conn.define('customer', {
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
});

module.exports = Customer;
