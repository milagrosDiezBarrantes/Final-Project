const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const characters = require('./characters.js');
const comicsRoute = require('./comics.js');
const user = require('./user.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/characters', characters);
router.use('/comics', comicsRoute);
router.use('/user', user);

module.exports = router;
