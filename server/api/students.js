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

// Delete /api/students
router.delete('/', async (req, res, next) => {
	try {
		const student = await Student.findByPk(req.body.student.id);
		if (!student) {
			res.sendStatus(404);
		} else {
			await student.destroy();
			res.send(student);
		}
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
