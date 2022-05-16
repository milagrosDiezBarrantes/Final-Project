const { Router } = require('express');


const router = Router();


const { getComics, getById, getSerieById, createComic, updateComic,getRender,deleteComic } = require('../controllers/comics.js');



router.get('/', getComics);
router.get('/:id', getById);
router.get('/serie/:id', getSerieById);
router.get("/render/:id", getRender)

router.post('/create', createComic)
router.put('/update/:id', updateComic);
router.delete('/delete/:id', deleteComic);
//router.get('/comicDb', getDbComic);

module.exports = router;