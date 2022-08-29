const Sequelize = require('sequelize');
const db = require('../database');

const Campus = db.define('campus', {
	name: { type: Sequelize.STRING, allowNull: false },
	description: {
		type: Sequelize.TEXT,
	},
	address: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: `https://picsum.photos/200/300?random=${Math.floor(
			Math.random() * (99 - 1 + 1) + 1
		)}`,
	},
});

module.exports = Campus;
