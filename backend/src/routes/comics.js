
   const {Router} = require('express');

   const router = Router();

   const {getComics} = require('../controllers/comics.js');


   router.get('/', getComics);

   module.exports = router;