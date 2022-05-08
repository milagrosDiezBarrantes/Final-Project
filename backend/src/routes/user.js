const { Router } = require("express");
const { Sequelize, Model } = require("sequelize");
const axios = require("axios");
let { API_KEY, HASH_KEY } = process.env;
const { Users , Plans,Favorites_comics,Favorites_characters } = require(`../db`);

const router = Router();

router.post("/", async (req, res) => {
	const { email, firstName, lastName, userName, age, password, picture,plan_id } =
		req.body;
// id
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
				plan_id
			},
		});
		// let ElPlan = await Plans.findAll({
		// 	where: { name: plan },
		//   });
		//   await user.setPlans(ElPlan.id);
		console.log("se creó mi usuario pa? " + created);

		return res.status(201).json({ user, created });
	} catch (error) {
		console.log(error, "algo pasó con el post del user");
	}
});
	router.put("/db", async (req, res) => {
		// const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
		const { id } = req.body;

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
				plan_id: req.body.plan_id,
			});

			return res.status(201).json({ user });
		} catch (error) {
			console.log(error, "error en la ruta put user");
		}
	});
	
	router.get("/byid", async (req, res) => {
		// const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
		const { id } = req.body;

		try {
			console.log(id);
			const user = await Users.findOne({
				where: {
					id: id,
				},
			});

			return res.status(201).json({ user });
		} catch (error) {
			console.log(error, "error en la ruta put user");
		}
	});
	router.post("/favoritesComics", async (req, res) => {//axios.post(localhost://3000/user/favoritesComics,{id:iduser,idcomics:arraydeids})
		// const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
		const { id,idComics } = req.body; //idComics = [idscomics1,idcomics2](UUID4)

		try {
			console.log(id);
			const user = await Users.findOne({
				where: {
					id: id,
				},
			});
			user.setComics(idComics)

			return res.status(201).json({ user });
		} catch (error) {
			console.log(error, "error en la ruta post/favorites");
		}
	});
	router.get("/favoritesComics", async (req, res) => {
		// const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
		const { id } = req.body; //idComics = [idscomics1,idcomics2](UUID4)

		try {
			console.log(id);
			const favorites = await Favorites_comics.findAll({
				where: {
					UserId: id,
				},
			});
			

			return res.status(201).json({ favorites });
		} catch (error) {
			console.log(error, "error en la ruta post/favorites");
		}
	});
	router.post("/favoritesCharacters", async (req, res) => {
		// const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
		const { id,idCharacters } = req.body;

		try {
			console.log(id);
			const characters = await Users.findOne({
				where: {
					id: id,
				},
			});
			user.setCharacters(idCharacters)

			return res.status(201).json({ characters });
		} catch (error) {
			console.log(error, "error en la ruta post/favorites");
		}
	});

	router.get("/favoritesCharacters", async (req, res) => {
		// const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
		const { id } = req.body; //idComics = [idscomics1,idcomics2](UUID4)

		try {
			console.log(id);
			const characters = await Favorites_characters.findAll({
				where: {
					UserId: id,
				},
			});
			

			return res.status(201).json({ characters });
		} catch (error) {
			console.log(error, "error en la ruta post/favorites");
		}
	});

router.get("/", async (req, res) => {
	let users = await Users.findAll();

	if (users.length === 0) {
		return res.send("tabla vacía");
	}
	return res.send(users || "tabla vacía");
});

module.exports = router;
