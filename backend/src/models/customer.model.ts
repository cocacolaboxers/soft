import * as Sequelize from 'sequelize';
const conn = require('../database');

export const Customer = conn.define('customer', {
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

export const CustomerView = conn.define('customerviews', {
	ID: {
		type: Sequelize.INTEGER,
	},
	ID_Customer: {
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
	NameEmployee: {
		type: Sequelize.TEXT,
	},
	LastNameEmployee: {
		type: Sequelize.TEXT,
	},
	DescriptionTask: {
		type: Sequelize.TEXT,
	},
});

// module.exports = Customer;
