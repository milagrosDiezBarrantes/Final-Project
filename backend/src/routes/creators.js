require("dotenv").config();
const { Router } = require("express");
const { Sequelize, Model } = require("sequelize");
const axios = require("axios");
let { API_KEY, HASH_KEY } = process.env;
const { Creators } = require(`../db`)
const router = Router();

router.get("/all", async (req, res) => {
	let creators =[]
	 creators = await Creators.findAll()
	 console.log("soy el creators", creators.length)
	if(creators.length<1){

		try {	

			let i=0
while(i < 5595){
	let cha	= axios.get(`https://gateway.marvel.com/v1/public/creators?limit=100&offset=${i}&ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`)
	creators.push(cha)
  console.log(i)
  if(i!=5500){
  i=i+100   
  }else{
    i=i+95
  }
  console.log(i)
};
	creators= await Promise.all(creators)
	creators= creators.map((e)=>e.data.data.results)
	creators=creators.flat()
	console.log(creators.length)

	creators = creators.map((e) => ({
		id: e.id,
		firstName: e.firstName,
		lastName: e.lastName,
		fullName: e.fullName,
		comics: e.comics.available,
		series: e.series.available,
		stories: e.stories.available,
		events: e.events.available,
		profilePic: e.thumbnail.path + "." + e.thumbnail.extension,
	}));
	console.log("entre al if")
	creators.forEach( async (e)=> await Creators.findOrCreate(
		{where:

			{
				id:e.id,
			firstName: e.firstName,
			lastName: e.lastName,
			fullName: e.fullName,
			comics: e.comics,
			series: e.series,
			stories: e.stories,
			events: e.events,
			profilePic: e.profilePic,
		}
	}))
		
	return	res.status(201).json(creators);
	} catch (err) {
		console.log(err);
		// next(err)
	}
	}
	return	res.status(200).json(creators);
});

router.get("/:id/:comics", async (req, res) => {
	//comics stories series events
	let { id, comics } = req.params;
	console.log(API_KEY, HASH_KEY);
	let character = await axios.get(
		`https://gateway.marvel.com/v1/public/creators/${id}/${comics}?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`
	);
	character = character.data.data.results;

	res.status(200).json(character);
});

router.get("/:id", async (req, res) => {
	let { id } = req.params;
	console.log(API_KEY, HASH_KEY);
	let character = await axios.get(
		`https://gateway.marvel.com/v1/public/creators/${id}?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`
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
		let characters = await axios.get(
			`https://gateway.marvel.com/v1/public/creators?ts=1&apikey=bd53436ddc2010965cb5bd917e524599&hash=9a7d38583231dff6e8e2d78db1ce9f60&limit=100`
		);		  
		
		characters = characters.data.data.results;

		return	res.status(200).json(characters);

	} catch (err) {
		console.log(err);
		// next(err)
	}
});

module.exports = router;
