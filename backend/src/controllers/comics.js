const axios = require('axios');
const { Router } = require('express');
require('dotenv').config();
const {API_KEY,HASH_KEY} = process.env;


//search characters whose names start with the given string

const getComics = async (req, res, next) => {
    try{
        let allComics= await axios.get(`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}&limit=100`);
        allComics = allComics.data.data.results;

        let toRender= allComics.map((comic)=>({
            id:comic.id,
            title:comic.title,
            description:comic.description,  
            img:comic.thumbnail.path+"."+comic.thumbnail.extension,

        }));
        res.status(200).json(toRender);        

    }catch(error){
        next(error)
}
}

module.exports = {getComics};
//     try{
//         const data = await axios('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=92b1929109f0272717c217d062103f24&hash=0a5a4c3c68e3ef9191ccb45e803bcb0b')
//     data.data? res.status(200).json(data.data) : res.status(500).json({message: 'Error'})

//     }catch(error){
//         console.log(error)
//     }
// })