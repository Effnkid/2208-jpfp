const router = require('express').Router();
const { Campus, Student } = require('../db');

router.get('/', async (req, res, next) => {
	try {
		res.send(await Campus.findAll({ include: { model: Student } }));
	} catch (e) {
		next(e);
	}
});
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
