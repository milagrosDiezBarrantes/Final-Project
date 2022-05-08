require("dotenv").config();
const { Router } = require("express");
const { Sequelize, Model } = require("sequelize");
const axios = require("axios");
let { API_KEY, HASH_KEY } = process.env;
const { Plans } = require(`../db`)
const router = Router();


router.get("/", async (req, res) => {
	try {
		let plans = await Plans.findAll()

		return	res.status(200).json(plans);

	} catch (err) {
		console.log(err);
		// next(err)
	}
});

module.exports = router;
