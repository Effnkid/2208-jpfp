const router = require('express').Router();
const { Student, Campus } = require('../db');

// GET /api/students
router.get('/', async (req, res, next) => {
	try {
		res.send(await Student.findAll({ include: { model: Campus } }));
	} catch (e) {
		next(e);
	}
});
// POST /api/students
router.post('/', async (req, res, next) => {
	try {
		res.status(201).send(await Student.create(req.body));
	} catch (e) {
		next(e);
	}
});

// GET /api/students/:studentId
router.get('/:studentId', async (req, res, next) => {
	try {
		res.send(
			await Student.findByPk(req.params.studentId, {
				include: [Campus],
			})
		);
	} catch (e) {
		next(e);
	}
});

module.exports = router;
