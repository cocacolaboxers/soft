import * as Sequelize from 'sequelize';
const conn = require('../database');

export const Orden_Mater = conn.define('orden_master', {
	ID: {
		type: Sequelize.INTEGER,
	},
	ID_Status: {
		type: Sequelize.INTEGER,
	},
	ID_Customer: {
		type: Sequelize.INTEGER,
	},
	ID_Employee: {
		type: Sequelize.INTEGER,
	},
	Confirmed: {
		type: Sequelize.INTEGER,
	},
	CancelationDate: {
		type: Sequelize.NUMBER,
	},
	PaymentMethod: {
		type: Sequelize.TEXT,
	},
});

export const Orden_Detail = conn.define('orden_detail', {
	ID: {
		type: Sequelize.INTEGER,
	},
	ID_OrdenM: {
		type: Sequelize.INTEGER,
	},
	MontoBruto: {
		type: Sequelize.NUMBER,
	},
	MontoNeto: {
		type: Sequelize.NUMBER,
	},
	Quantity: {
		type: Sequelize.INTEGER,
	},
	ID_Item: {
		type: Sequelize.INTEGER,
	},
	ID_Tax: {
		type: Sequelize.INTEGER,
	},
});

// module.exports = Orden_Mater;
