const { Router } = require("express");
const { Sequelize, Model } = require("sequelize");
const axios = require("axios");
const { API_KEY, HASH_KEY } = process.env;

const router = Router();

router.get("/", async (req, res) => {
	/* https://gateway.marvel.com/v1/public/characters?ts=1&apikey=bd53436ddc2010965cb5bd917e524599&hash=9a7d38583231dff6e8e2d78db1ce9f60 */
	console.log(API_KEY, HASH_KEY);
	// let characters =await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`);
	let characters = await axios.get(
		`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=bd53436ddc2010965cb5bd917e524599&hash=9a7d38583231dff6e8e2d78db1ce9f60&limit=100`
	);
	characters = characters.data.data.results;
	console.log(characters.length);
	let arr = characters.map((e) => ({
		id: e.id,
		name: e.name,
		description: e.description,
		profilePic: e.thumbnail.path + "." + e.thumbnail.extension,
	}));

	res.status(200).send(arr);
});

router.get("/:id", async (req, res) => {
	let {id} = req.params
	/* https://gateway.marvel.com/v1/public/characters?ts=1&apikey=bd53436ddc2010965cb5bd917e524599&hash=9a7d38583231dff6e8e2d78db1ce9f60 */
	console.log(API_KEY, HASH_KEY);
	// let characters =await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`);
	let characters = await axios.get(
		`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=bd53436ddc2010965cb5bd917e524599&hash=9a7d38583231dff6e8e2d78db1ce9f60`
	);
	characters = characters.data.data.results[0];

	res.send(characters);
});

module.exports = router;
