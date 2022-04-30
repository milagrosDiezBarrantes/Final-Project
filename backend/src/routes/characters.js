require("dotenv").config();
const { Router } = require("express");
const { Sequelize, Model } = require("sequelize");
const axios = require("axios");
let { API_KEY, HASH_KEY } = process.env;

const router = Router();

router.get("/all", async (req, res) => {
	const {name} = req.query;
	try {
		// let abc = ["a","b","c","d","e","f"];
		let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
		

	 let characters =[]
	for (let i = 0; i < abc.length; i++) {
		console.log(abc[i]);
	let cha	= axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${abc[i]}&limit=100&ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`)
	characters.push(cha)
	}
	characters= await Promise.all(characters)
	characters= characters.map((e)=>e.data.data.results)
	characters=characters.flat()
	console.log(characters.length)

	characters = characters.map((e) => ({
		id: e.id,
		name: e.name,
		description: e.description,
		profilePic: e.thumbnail.path + "." + e.thumbnail.extension,
	}));
	if(name){
			
		characters = characters.filter(char => char.name?.toLowerCase().includes(name.toString().toLowerCase()));
				if(characters.length){
				return	res.status(200).json(characters)
				}
				else{
					res.status(200).json([])
				}

	}	
		



		// characters = characters.map((e) =>e.data);
		// characters = characters.map((e) => ({
		// 	id: e.id,
		// 	name: e.name,
		// 	description: e.description,
		// 	profilePic: e.thumbnail.path + "." + e.thumbnail.extension,
		// }));
	return	res.status(200).json(characters);
	} catch (err) {
		console.log(err);
		// next(err)
	}
});

router.get("/:id/:comics", async (req, res) => {
	let { id, comics } = req.params;
	console.log(API_KEY, HASH_KEY);
	let character = await axios.get(
		`https://gateway.marvel.com/v1/public/characters/${id}/${comics}?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`
	);
	character = character.data.data.results;
	character = character.map((e) => ({
		id: e.id,
		title: e.title,
		profilePic: e.thumbnail.path + "." + e.thumbnail.extension,
		images: e.images,
		creators: e.creators,
		characters: e.characters.items,
	}));
	res.status(200).json(character);
});

router.get("/:id/:extra", async (req, res) => {
	let { id, extra } = req.params;
	console.log(API_KEY, HASH_KEY);
	let character = await axios.get(
		`https://gateway.marvel.com/v1/public/characters/${id}/${extra}?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`
	);
	character = character.data.data.results;

	res.status(200).json(character);
});

router.get("/:id", async (req, res) => {
	let { id } = req.params;
	console.log(API_KEY, HASH_KEY);
	let character = await axios.get(
		`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`
	);
	character = character.data.data.results[0];
	//profilePic
	character = {
		id: character.id,
		name: character.name,
		description: character.description,
		profilePic: character.thumbnail.path + "." + character.thumbnail.extension,
		comics: character.comics.items,
		series: character.series.items,
		stories: character.stories.items,
		events: character.events.items,
		comics: character.comics.items,
	};

	res.status(200).json(character);
});


router.get("/", async (req, res) => {
	try {
		const { name } = req.query;
		let characters = await axios.get(
			`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=bd53436ddc2010965cb5bd917e524599&hash=9a7d38583231dff6e8e2d78db1ce9f60&limit=100`
		);		  
		if(name){
			 let characters = await axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&limit=100&ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`)
		}
		characters = characters.data.data.results;

		let arr = characters.map((e) => ({
			id: e.id,
			name: e.name,
			description: e.description,
			profilePic: e.thumbnail.path + "." + e.thumbnail.extension,
		}));
		return	res.status(200).json(characters);

	} catch (err) {
		console.log(err);
		// next(err)
	}
});

module.exports = router;
