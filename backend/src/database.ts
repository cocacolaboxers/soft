import { Sequelize } from 'sequelize';

module.exports = new Sequelize('sqlite::memory:', {
	dialect: 'sqlite',
	storage:
		'C:\\Users\\mfsan\\Desktop\\sunsoft-web\\backend\\sqlite\\sunsoft-database.db',
});
