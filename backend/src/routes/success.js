require("dotenv").config();
const { Router } = require("express");
const { Sequelize, Model } = require("sequelize");
const axios = require("axios");
const { Users,Payments } = require(`../db`);
const router = Router();

router.post("/", async (req, res) => {
	const { email, orderID, payerID, amount } = req.body;
	try {
        const pago = await Payments.create({
            email, orderID, payerID, amount
          });
        const user = await Users.findOne({
            where: {
              email: email,
            }
        });
        user.update({role:"ROLE_PRIME"})
        console.log("se hizo el pago")

		return res.status(200).json({ useruser,pago});
	} catch (err) {
		console.log(err);
		// next(err)
	}
});

module.exports = router;
