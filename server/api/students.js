const router = require('express').Router();
const { Student, Campus } = require('../db');

router.get('/', async (req, res, next) => {
	try {
		res.send(await Student.findAll({ include: { model: Campus } }));
	} catch (e) {
		next(e);
	}
});
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
