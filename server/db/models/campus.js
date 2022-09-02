const Sequelize = require('sequelize');
const db = require('../database');

const Campus = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notNull: true,
			notEmpty: true,
		},
		get() {
			const caseName = this.getDataValue('name');
			return caseName
				? caseName
						.replace(/\s+/g, ' ')
						.trim()
						.split(' ')
						.map((ele) => ele[0].toUpperCase() + ele.slice(1))
						.join(' ')
				: null;
		},
	},
	description: {
		type: Sequelize.TEXT,
	},
	address: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notNull: true,
			notEmpty: true,
		},
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: `https://picsum.photos/200/300?random=${Math.floor(
			Math.random() * (99 - 1 + 1) + 1
		)}`,
	},
});

module.exports = Campus;
