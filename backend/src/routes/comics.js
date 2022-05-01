const { Router } = require('express');

const router = Router();

const { getComics, getById, getSerieById } = require('../controllers/comics.js');


router.get('/', getComics);
router.get('/:id', getById);
router.get('/serie/:id', getSerieById);

module.exports = router;