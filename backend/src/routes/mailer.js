const { Router } = require('express');
const main = require('../controllers/mailer');


const router = Router();

router.post('/', async(req, res) => {
    console.log("hola mail")
    let emailUser= await main(info)
    return res.status(200).json(emailUser)
})

module.exports = router;

