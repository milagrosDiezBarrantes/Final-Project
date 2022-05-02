const axios = require("axios");
const { Comics } = require(`../db`)
require("dotenv").config();
const { API_KEY, HASH_KEY } = process.env;

//search characters whose names start with the given string

const getComics = async (req, res, next) => {

	  let comicsDb = await Comics.findAll()
	 console.log("soy el comics", comicsDb.length)
   let comics =[] 
	if(comicsDb.length<6){

		try {	

			let i=0
while(i < 1100){
	let cha	= axios.get(`https://gateway.marvel.com/v1/public/comics?limit=100&offset=${i}&ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`)
	comics.push(cha)
  console.log(i)
  i=i+100   

  console.log(i)
};
	comics= await Promise.all(comics)
	comics= comics.map((e)=>e.data.data.results)
	comics=comics.flat()
	console.log(comics.length)

	comics = comics.map((e) => ({
		id: e.id,
		title: e.title,
		description: e.description,
		img: e.thumbnail.path + "." + e.thumbnail.extension,
    pages:e.pageCount,
    creators:e.creators.items?.map(a=>a.name)
	}));
	console.log("entre al if")
	comics.forEach( async (e)=> await Comics.findOrCreate(
		{where:{
			id:e.id,
			title: (e.title?e.title:"Otro comic"),
			img: e.img,
			description: e.description,
      pages:e.pages,
      creators:e.creators}
		}))
		comics=[...comics,...comicsDb]
	return	res.status(201).send(comics);
	} catch (err) {
		console.log(err);
		// next(err)
	}
	}
	return	res.status(200).send(comicsDb);
};

const getById = async (req, res, next) => {
  try {
    let comic = await axios.get(
      `https://gateway.marvel.com/v1/public/comics/${req.params.id}?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`
    );
    comic = comic.data.data.results;

    let toRender = comic.map((comic) => ({
      id: comic.id,
      title: comic.title,
      description: comic.description,
      img: comic.thumbnail.path + "." + comic.thumbnail.extension,
      variants:comic.variants?.map((variant) =>({
        coverName : variant.name,
        coverId : variant.resourceURI.split('http://gateway.marvel.com/v1/public/comics/')[1],
      })),//aca va la variesdad de imagen de portadas si hay
        creators: comic.creators.items?.map((creator) => ({
          creatorId: creator.resourceURI.split('http://gateway.marvel.com/v1/public/creators/')[1],
          creatorName: creator.name,
          creatorRole: creator.role //aca va editor, writer, penciller, etc
        })),
      serie: comic.series.name, //si es una serie de revistas aca viene el nombre de la misma
      serieId: comic.series.resourceURI.split('http://gateway.marvel.com/v1/public/series/')[1],
      publish: comic.dates?.map((e)=>{
        return (e.date)//en [0] viene la fecha de fin publicacion, en [1] la fecha de primer publicacion
      }),
    
    }));
    res.status(200).json(toRender);
  } catch (error) {
    next(error);
  }
};
//trae resultados con coincidencia parcial desde inicio , es decir title = "iron" va a traer a todos los comics que empiecen con "iron", ahora si empieza con The iron, chau no lo va a encontrar :/
const getByTitle = async (title) => {
  try {
    let search = await axios.get(

      `https://gateway.marvel.com/v1/public/comics?noVariants=true&limit=100&titleStartsWith=${title}&ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`);

    search = search.data.data.results;

    let toRender = search?.map((comic) => {
      return ({
        id: comic.id,
        title: comic.title,
        description: comic.description,
        img: comic.thumbnail.path + "." + comic.thumbnail.extension,

        creators: comic.creators.items?.map((creator) => ({
          id: creator.resourceURI.split(('http://gateway.marvel.com/v1/public/creators/')[1]),
          name: creator.name,
          role: creator.role, //aca va editor, writer, penciller, etc
        })),
        serie: comic.series.name,
        publish: comic.dates?.map((e) => {
          return (e.date); //en [0] viene la fecha de fin publicacion, en [1] la fecha de primer publicacion
        })
      });
    });
    return toRender;
  } catch (error) {
    return error;
  }
};

const getSerieById = async (req, res, next) => {
  try {
    let serie = await axios.get(
      `https://gateway.marvel.com/v1/public/series/${req.params.id}?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`
    );
    serie = serie.data.data.results;

    let toRender = serie.map((serie) => ({
      id: serie.id,
      title: serie.title,
      description: serie.description,
      startYear: serie.startYear,
      endYear: serie.endYear,
      img: serie.thumbnail.path + "." + serie.thumbnail.extension,
      comics: serie.items?.map((comic) => ({
        id: serie.resourceURI.split(('http://gateway.marvel.com/v1/public/comics/')[1]),
        }))
      }));
    res.status(200).json(toRender);
  } catch (error) {
    next(error);
  }
};


module.exports = { getComics, getById, getByTitle, getSerieById};
//     try{
//         const data = await axios('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=92b1929109f0272717c217d062103f24&hash=0a5a4c3c68e3ef9191ccb45e803bcb0b')
//     data.data? res.status(200).json(data.data) : res.status(500).json({message: 'Error'})

//     }catch(error){
//         console.log(error)
//     }
// })
