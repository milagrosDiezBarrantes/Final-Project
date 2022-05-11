const { Router } = require("express");
const axios = require("axios");
const { createProduct ,createPlan, generateSubscription,createPayment,
    executePayment ,success } = require("../controllers/productPaypal");

const router = Router();
router.post(`/create-payment`, createPayment)
router.get(`/execute-payment`, executePayment)
router.post("/createProduct", createProduct  )
router.post("/createPlan", createPlan  )
router.post("/generateSubscription", generateSubscription)
router.post("/success", success  )


module.exports = router;