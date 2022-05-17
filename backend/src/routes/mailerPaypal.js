const { Router } = require('express');
const main = require('../controllers/mailerPaypal');


const router = Router();

router.post('/', async(req, res) => {
    let emailPaypal= await main("customer@example.com")
    return res.status(200).json(emailPaypal)
})

module.exports = router;