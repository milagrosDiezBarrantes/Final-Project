const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const characters = require('./characters.js');
const comicsRoute = require('./comics.js');
const user = require('./user.js');
const banner = require('./banner.js');
const creators = require('./creators.js');
const plans = require('./plans.js');
// const mercado = require('./mercado.js');
const paypal = require('./paypal.js');
const mailer = require('./mailer.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/banner', banner);
router.use('/characters', characters);
router.use('/comics', comicsRoute);
router.use('/user', user);
router.use('/plans', plans);
router.use('/creators', creators);
router.use('/mailer', mailer);


// router.use('/mercado', mercado);
// router.use('/paypal', paypal);



module.exports = router;
