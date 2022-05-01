const axios = require("axios");
require("dotenv").config();
const { API_KEY, HASH_KEY } = process.env;

//search characters whose names start with the given string

const getComics = async (req, res, next) => {
  const { title } = req.query;
  try {
    if (title) {
      let toRender = await getByTitle(title);
      return toRender === [] ? res.status(404).json({ message: 'No comics found' })
        : res.status(200).json(toRender);
    }

    let allComics = await axios.get(
      `https://gateway.marvel.com/v1/public/comics?noVariants=true&ts=1&apikey=${API_KEY}&hash=${HASH_KEY}&limit=100`
    );
    allComics = allComics.data.data.results;

    let toRender = allComics.map((comic) => ({
      id: comic.id,
      title: comic.title,
      description: comic.description,      
      img: comic.thumbnail.path + "." + comic.thumbnail.extension,
      
    }));

    res.status(200).json(toRender);
  } catch (error) {
    next(error);
  }
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
