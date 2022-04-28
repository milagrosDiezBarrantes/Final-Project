const { Router } = require("express");
const { Sequelize, Model } = require("sequelize");
const axios = require("axios");
let { API_KEY, HASH_KEY } = process.env;
const { User } = require(`../db`);

const router = Router();

router.post("/", async (req, res) => {
	const {  email, firstName, lastName, userName, age, password, picture } =    req.body;

try{

    const [user, created] = await User.findOrCreate({
        where: {
             email, firstName, lastName, userName, age, password, picture
        },
      });
      console.log("se creó mi usuario pa? "+ created )
   

 
  
      return res.status(201).json(user);



}catch(e){
    console.log(e,"algo pasó con el post del user")
}



});
