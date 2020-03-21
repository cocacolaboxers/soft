const Sequelize = require('sequelize');

let db = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'mysql' | 'sqlite' | 'postgres' | 'mssql',
	operatorsAliases: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},

	storage: 'path/to/database.sqlite',
});

db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch((err) => console.log('Error: ' + err));

module.exports = db;
