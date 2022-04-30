const { Router } = require("express");
const { Sequelize, Model } = require("sequelize");
const axios = require("axios");
let { API_KEY, HASH_KEY } = process.env;
const { Comics } = require(`../db`);

const router = Router();

router.post("/", async (req, res) => {
	const { email, firstName, lastName, userName, age, password, picture,plan } =
		req.body;
//             id
// email
// firstName
// lastName
// userName
// age
// password
// picture
	try {
		const [user, created] = await Users.findOrCreate({
			where: {
				email,
				firstName,
				lastName,
				userName,
				age,
				password,
				picture,
                plan
			},
		});
		console.log("se creó mi usuario pa? " + created);

		return res.status(201).json({ user, created });
	} catch (error) {
		console.log(error, "algo pasó con el post del user");
	}
});
router.put("/db", async (req, res) => {
		// const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
		const { id } = req.query;

		try {
			console.log(id);
			const user = await Users.findOne({
				where: {
					id: id,
				},
			});
console.log(id)
console.log(user)

			await user.update({
				email: req.body.email,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				userName: req.body.userName,
				age: req.body.age,
				password: req.body.password,
				picture: req.body.picture,
				plan: req.body.plan,
			});

			return res.status(201).json({ user });
		} catch (error) {
			console.log(error, "error en la ruta put user");
		}
	});

router.get("/", async (req, res) => {
	let users = await Comics.findAll();

	if (users.length === 0) {
		return res.send("tabla vacía");
	}
	return res.send(users || "tabla vacía");
});

module.exports = router;
