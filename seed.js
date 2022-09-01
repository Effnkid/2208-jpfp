const { db } = require('./server/db');

const { Student, Campus } = require('./server/db');

const campuses = [
	{
		name: 'Brooklyn College',
		description:
			'Brooklyn College is a public university in Brooklyn, New York. It is part of the City University of New York system and enrolls about 15,000 undergraduate and 2,800 graduate students on a 35-acre campus',
		address: '2900 Bedford Ave, Brooklyn, NY 11210',
		imageUrl: `https://picsum.photos/200/300?random=${Math.floor(
			Math.random() * (99 - 1 + 1) + 1
		)}`,
	},
	{
		name: 'New York City College of Technology',
		description:
			"The New York City College of Technology is a public college in New York City. Founded in 1946, it is the City University of New York's college of technology.",
		address: '300 Jay St, Brooklyn, NY 11201',
		imageUrl: `https://picsum.photos/200/300?random=${Math.floor(
			Math.random() * (99 - 1 + 1) + 1
		)}`,
	},
	{
		name: 'Hunter College',
		description:
			'Hunter College is a public university in New York City. It is one of the constituent colleges of the City University of New York and offers studies in more than one hundred undergraduate and postgraduate fields across five schools. It also administers Hunter College High School and Hunter College Elementary School',
		address: '695 Park Ave, New York, NY 10065',
		imageUrl: `https://picsum.photos/200/300?random=${Math.floor(
			Math.random() * (99 - 1 + 1) + 1
		)}`,
	},
	{
		name: 'Long Island University Brooklyn',
		description:
			'LIU Brooklyn is a private university in Brooklyn, New York. It is the original unit and first of two main campuses of the private Long Island University system.',
		address: '1 University Plaza, Brooklyn, NY 11201',
		imageUrl: `https://picsum.photos/200/300?random=${Math.floor(
			Math.random() * (99 - 1 + 1) + 1
		)}`,
	},
	{
		name: 'Queens College',
		description:
			'Queens College is a public college in the Queens borough of New York City. It is part of the City University of New York system. Its 80-acre campus is primarily located in Flushing, Queens. It has a student body representing more than 170 countries.',
		address: '65-30 Kissena Blvd, Queens, NY 11367',
		imageUrl: `https://picsum.photos/200/300?random=${Math.floor(
			Math.random() * (99 - 1 + 1) + 1
		)}`,
	},
];

const students = [
	{
		firstName: 'Levar',
		lastName: 'Bobb-semple',
		email: 'levar@gmail.com',
		imageUrl: 'https://picsum.photos/200/300?random=1',
		gpa: 3.98,
		campusId: Math.floor(Math.random() * (5 - 1 + 1) + 1),
	},
	{
		firstName: 'John',
		lastName: 'dota',
		email: 'john@gmail.com',
		imageUrl: 'https://picsum.photos/200/300?random=2',
		gpa: 2.99,
		campusId: Math.floor(Math.random() * (5 - 1 + 1) + 1),
	},
	{
		firstName: 'Malik',
		lastName: 'Miller',
		email: 'malik@gmail.com',
		imageUrl: 'https://picsum.photos/200/300?random=3',
		gpa: 2.3,
		campusId: Math.floor(Math.random() * (5 - 1 + 1) + 1),
	},
	{
		firstName: 'Brandon',
		lastName: 'Stock',
		email: 'brandon@gmail.com',
		imageUrl: 'https://picsum.photos/200/300?random=4',
		gpa: 2.0,
		campusId: Math.floor(Math.random() * (5 - 1 + 1) + 1),
	},
	{
		firstName: 'Joe',
		lastName: 'Hopper',
		email: 'joehopper@gmail.com',
		imageUrl: 'https://picsum.photos/200/300?random=5',
		gpa: 3.5,
		campusId: Math.floor(Math.random() * (5 - 1 + 1) + 1),
	},
	{
		firstName: 'Mike',
		lastName: 'Dill',
		email: 'mikedill@gmail.com',
		imageUrl: 'https://picsum.photos/200/300?random=6',
		gpa: 3.0,
		campusId: Math.floor(Math.random() * (5 - 1 + 1) + 1),
	},
	{
		firstName: 'Steven',
		lastName: 'Hunter',
		email: 'stevenhunter@gmail.com',
		imageUrl: 'https://picsum.photos/200/300?random=7',
		gpa: 2.3,
		campusId: Math.floor(Math.random() * (5 - 1 + 1) + 1),
	},
];

const seed = async () => {
	try {
		await db.sync({ force: true });

		await Promise.all(
			campuses.map((campus) => {
				return Campus.create(campus);
			})
		);
		await Promise.all(
			students.map((student) => {
				return Student.create(student);
			})
		);

		console.log('Seeding success!');
		db.close();
	} catch (err) {
		console.error('Oh noes! Something went wrong!');
		console.error(err);
		db.close();
	}
};

seed();
