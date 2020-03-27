import * as Sequelize from 'sequelize';
const conn = require('../database');

const Employee = conn.define('employee', {
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
	UserName: {
		type: Sequelize.TEXT,
	},
	Password: {
		type: Sequelize.TEXT,
	},
	Language: {
		type: Sequelize.TEXT,
	},
});

module.exports = Employee;
