require("dotenv").config();
const { Router } = require("express");
const { Sequelize, Model } = require("sequelize");
const axios = require("axios");
let { API_KEY, HASH_KEY } = process.env;
const { Characters } = require(`../db`)
const router = Router();

router.get("/all", async (req, res) => {
	let characters =[]
	let charactersDb = await Characters.findAll({order: [['updatedAt', 'DESC']]})
	 console.log("soy el characters", charactersDb.length)
	if(charactersDb.length===0){

		try {	

			let i=0
while(i < 1561){
	let cha	= axios.get(`https://gateway.marvel.com/v1/public/characters?limit=100&offset=${i}&ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`)
	characters.push(cha)
  if(i!=1500){
  i=i+100   
  }else{
    i=i+61 
  }
};
	characters= await Promise.all(characters)
	characters= characters.map((e)=>e.data.data.results)
	characters=characters.flat()
	console.log(characters.length)

	characters =characters.map((e) => ({
		id: e.id,
		name: e.name,
		description: e.description,
		img: e.thumbnail.path + "." + e.thumbnail.extension,
  comics:e.comics.items.map((e) => ({name:e.name,id:e.resourceURI.split("/").splice(-1)[0]})),
series:e.series.items.map((e) => ({name:e.name,id:e.resourceURI.split("/").splice(-1)[0]})),
stories:e.stories.items.map((e) => ({name:e.name,id:e.resourceURI.split("/").splice(-1)[0]})),
events:e.events.items.map((e) => ({name:e.name,id:e.resourceURI.split("/").splice(-1)[0]})),
	}))

	console.log("entre al if")
	characters.forEach(async (e) => {
        if (!e.img.includes("image_not_available") && e.name.length > 4) {
          await Characters.findOrCreate({
            where: {
              id: e.id,
              name: e.name,
              img: e.img,
              comics: e.comics,
              series: e.series,
              stories: e.stories,
              events: e.events,
              description:e.description
            },
          });
        }
      });
		
	
	} catch (err) {
		console.log(err);
		// next(err)
	}
	charactersDb = await Characters.findAll({order: [['updatedAt', 'DESC']]})


	}
	return	res.status(200).json(charactersDb);

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
	let character = await Characters.findOne({
		where:{
			id
		}
	})
	

return	res.status(200).json(character);
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
