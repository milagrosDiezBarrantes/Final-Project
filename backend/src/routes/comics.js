const router = require('.');
const {allComics} = require('../controllers/comics.js');

router.get('/', allComics);

module.exports = router;