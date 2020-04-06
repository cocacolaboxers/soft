import { Sequelize } from 'sequelize';

module.exports = new Sequelize('sqlite::memory:', {
	dialect: 'sqlite',
	storage:
		'C:\\Users\\ignac\\Desktop\\Bonetti\\soft\\backend\\sqlite\\sunsoft-database.db',
});
