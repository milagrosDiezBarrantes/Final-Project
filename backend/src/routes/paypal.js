const { Router } = require("express");
const axios = require("axios");
const { createProduct ,createPlan, generateSubscription } = require("../controllers/productPaypal");

const router = Router();

router.post("/createProduct", createProduct  )
router.post("/createPlan", createPlan  )
router.post("/generateSubscription", generateSubscription  )

module.exports = router;