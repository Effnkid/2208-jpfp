const router = require('express').Router();
const { Campus, Student } = require('../db');

// GET /api/campuses
router.get('/', async (req, res, next) => {
	try {
		res.send(await Campus.findAll({ include: { model: Student } }));
	} catch (e) {
		next(e);
	}
});
// POST /api/campuses
router.post('/', async (req, res, next) => {
	try {
		res.status(201).send(await Campus.create(req.body));
	} catch (e) {
		next(e);
	}
});

// GET /api/campuses/:campusId
router.get('/:campusId', async (req, res, next) => {
	try {
		res.send(
			await Campus.findByPk(req.params.campusId, {
				include: { model: Student },
			})
		);
	} catch (e) {
		next(e);
	}
});

module.exports = router;
