const Sequelize = require('sequelize');
const db = require('../database');

const Student = db.define('student', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notNull: true,
			notEmpty: true,
		},
		get() {
			const caseName = this.getDataValue('firstName');
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
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notNull: true,
			notEmpty: true,
		},
		get() {
			const caseName = this.getDataValue('lastName');
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
	fullName: {
		type: Sequelize.VIRTUAL,
		get() {
			return `${this.firstName} ${this.lastName}`;
		},
		set(value) {
			throw new Error('DO NOT TRY TO SET THE `fullName` value');
		},
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmail: true,
			notEmpty: true,
		},
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: `https://picsum.photos/200/300?random=${Math.floor(
			Math.random() * (99 - 1 + 1) + 1
		)}`,
	},
	gpa: {
		type: Sequelize.DECIMAL,
		validate: {
			isDecimal: true,
			min: 0.0,
			max: 4.0,
		},
	},
});
module.exports = Student;
