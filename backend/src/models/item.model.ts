import * as Sequelize from 'sequelize';
const conn = require('../database');

const Item = conn.define('item', {
	ID: {
		type: Sequelize.INTEGER,
	},
	ItemName: {
		type: Sequelize.TEXT,
	},
	Quantity: {
		type: Sequelize.INTEGER,
	},
});

module.exports = Item;
