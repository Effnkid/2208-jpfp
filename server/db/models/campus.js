const Sequelize = require('sequelize');
const db = require('../database');

const Campus = db.define('campus', {
	name: { type: Sequelize.STRING, allowNull: false },
	description: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	address: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: 'campus_1.jpg',
	},
});

module.exports = Campus;
