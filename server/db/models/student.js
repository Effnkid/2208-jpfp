const Sequelize = require('sequelize');
const db = require('../database');

const Student = db.define('student', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
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
		},
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: 'student.jpg',
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
