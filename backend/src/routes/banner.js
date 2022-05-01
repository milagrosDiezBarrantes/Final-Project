const { Router } = require("express");
const { Sequelize, Model } = require("sequelize");
const axios = require("axios");
let { API_KEY, HASH_KEY } = process.env;
const { Comics } = require(`../db`);

const router = Router();

router.post("/", async (req, res) => {
	const {title,
		img,
		pages,
		banner} =
		req.body;

	try {
		const [comic, created] = await Comics.findOrCreate({
			where: {
				title,
		img,
		pages,
		banner
			},
		});
		console.log("se creó mi comic pa? " + created);

		return res.status(201).json({ comic, created });
	} catch (error) {
		console.log(error, "algo pasó con el post del user");
	}
});
router.put("/db", async (req, res) => {
	// const { title, img, pages, banner } = req.body;
	const { id } = req.query;

	try {
		console.log(id);
		const comic = await Comics.findOne({
			where: {
				id: id,
			},
		});
		

		await comic.update({
			title: req.body.title, img: req.body.img, pages: req.body.pages, banner: req.body.banner
		});
		console.log("se modificó mi comic pa? ", true);
		return res.status(201).json({ comic,msg:"comic modificado" });
	} catch (error) {
		console.log(error, "error en la ruta put comic");
	}
});

router.get("/", async (req, res) => {
	let users = await Comics.findAll();

	if (users.length === 0) {
		return res.send("tabla vacía");
	}
	return res.send(users || "tabla vacía");
});

router.get("/header", async (req, res) => {
	let users = await Comics.findAll({
		where: {
			"banner": "true",
		}
	});

	if (users.length === 0) {
		return res.send("tabla vacía");
	}
	return res.send(users || "tabla vacía");
});

module.exports = router;
