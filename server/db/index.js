// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const Student = require('./models/student');
const Campus = require('./models/campus');
// const seed = require('../../seed');
//associations

Student.belongsTo(Campus);
Campus.hasMany(Student);

const syncAndSeed = async () => {
	try {
		await db.sync({ force: false });

		//use this area to sync your database

		console.log(`
		Seeding successful!
	  `);
	} catch (e) {
		console.log(e);
	}
};

module.exports = {
	// Include your models in this exports object as well!
	db,
	syncAndSeed,
	Student,
	Campus,
};
