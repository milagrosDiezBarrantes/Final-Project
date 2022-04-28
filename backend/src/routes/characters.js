const { Router } = require("express");
const { Sequelize, Model } = require("sequelize");
const axios = require("axios");
let { API_KEY, HASH_KEY } = process.env;

const router = Router();

router.get("/:id/:extra", async (req, res) => {
	let {id , extra } = req.params
	let { API_KEY, HASH_KEY } = process.env;
	console.log(API_KEY, HASH_KEY);
	let character = await axios.get(
		`https://gateway.marvel.com/v1/public/characters/${id}/${extra}?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`

	);
	character = character.data.data.results

	res.status(200).json(character);
});


router.get("/:id/:comics", async (req, res) => {
	let {id , comics } = req.params
	let { API_KEY, HASH_KEY } = process.env;
	console.log(API_KEY, HASH_KEY);
	let character = await axios.get(
		`https://gateway.marvel.com/v1/public/characters/${id}/${comics}?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`

	);
	character = character.data.data.results
	character = character.map((e) => ({ 
		id :  e.id,
		title:e.title,
		profilePic: e.thumbnail.path+"."+e.thumbnail.extension,
		images: e.images,
		creators:e.creators,
		characters: e.characters.items
	  }));
	res.status(200).json(character);
});


router.get("/:id", async (req, res) => {
	let {id} = req.params
	let { API_KEY, HASH_KEY } = process.env;
	console.log(API_KEY, HASH_KEY);
	let character = await axios.get(
		`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`

	);
	character = character.data.data.results[0];
	//profilePic
	character ={
		id: character.id,
		name: character.name,
		description: character.description,
		profilePic: character.thumbnail.path + "." + character.thumbnail.extension,
		comics : character.comics.items,
		series : character.series.items,
		stories : character.stories.items,
		events : character.events.items,
		comics : character.comics.items,
	}



	res.status(200).json(character);
});


router.get("/", async (req, res) => {
	/* https://gateway.marvel.com/v1/public/characters?ts=1&apikey=bd53436ddc2010965cb5bd917e524599&hash=9a7d38583231dff6e8e2d78db1ce9f60 */
	console.log(API_KEY, HASH_KEY);
	// let characters =await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`);
	let characters = await axios.get(
		`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=bd53436ddc2010965cb5bd917e524599&hash=9a7d38583231dff6e8e2d78db1ce9f60&limit=100`
	);
	characters = characters.data.data.results;
	let arr = characters.map((e) => ({
		id: e.id,
		name: e.name,
		description: e.description,
		profilePic: e.thumbnail.path + "." + e.thumbnail.extension,
	}));

	res.status(200).send(arr);
});


module.exports = router;
