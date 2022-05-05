const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const characters = require('./characters.js');
const comicsRoute = require('./comics.js');
const user = require('./user.js');
const banner = require('./banner.js');
const creators = require('./creators.js');
// const mercado = require('./mercado.js');
const paypal = require('./paypal.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/banner', banner);
router.use('/characters', characters);
router.use('/comics', comicsRoute);
router.use('/user', user);
router.use('/creators', creators);
// router.use('/mercado', mercado);
router.use('/paypal', paypal);







module.exports = router;
