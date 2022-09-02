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

// Delete /api/campuses
router.delete('/', async (req, res, next) => {
	try {
		const campus = await Campus.findByPk(req.body.campus.id);
		if (!campus) {
			res.sendStatus(404);
		} else {
			await campus.destroy();
			res.send(campus);
		}
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

// PUT /api/campuses/:campusId
router.put('/:campusId', async (req, res, next) => {
	try {
		const updateCampus = await Campus.findByPk(req.params.campusId, {
			include: { model: Student },
		});

		if (!updateCampus) {
			res.sendStatus(404);
		} else {
			res.send(await updateCampus.update(req.body));
		}
	} catch (e) {
		next(e);
	}
});

module.exports = router;
