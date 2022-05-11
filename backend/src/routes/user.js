const { Router } = require("express");
const { Sequelize, Model } = require("sequelize");
const axios = require("axios");
let { API_KEY, HASH_KEY } = process.env;
const { Users , Plans,Favorites_comics,Favorites_characters,Characters,Comics } = require(`../db`);

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
		console.log(error, "algo pasó con el post del user chequea los campos");
		return res.status(200).json({ mensaje:"algo pasó con el post del user chequea los campos" });
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

router.post("/favoritesComics", async (req, res) => {//axios.post(localhost://3000/user/favoritesComics,{id:iduser,idcomics:favorites})
		// const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
		const { id,idComics } = req.body; //idComics = [idscomics1,idcomics2](UUID4)

		try {
			console.log(id);
			const user = await Users.findOne({
				where: {
					id: id,
				},
			});
			console.log("soy idComics",idComics)
			user.setComics(idComics)

			return res.status(200).send( user );
		} catch (error) {
			console.log(error, "error en la ruta post/favorites");
		}
	});

router.get("/favoritesComics", async (req, res) => {
		// const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
		const { id } = req.query; //idComics = [idscomics1,idcomics2](UUID4)

		try {
			console.log(id);
			const favorites = await  Users.findOne({
				include:Comics,
				where: {
					id: id,
				},
			});

			return res.status(200).send( favorites.Comics );
		} catch (error) {
			console.log(error, "error en la ruta post/favorites");
		}
	});
router.post("/favoritesCharacters", async (req, res) => {
		// const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
		const { id,idCharacters } = req.body;

		try {
			console.log(id);
			const user = await Users.findOne({
				where: {
					id: id,
				},
			});
			user.setCharacters(idCharacters)

			return res.status(201).json({ user });
		} catch (error) {
			console.log(error, "error en la ruta post/favorites");
		}
	});

router.get("/favoritesCharacters", async (req, res) => {
		// const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
		const { id } = req.body; //idComics = [idscomics1,idcomics2](UUID4)

		try {
			console.log(id);
			const characters = await Users.findOne({
				include: Characters,
				where: {
					id: id
				},
			});
			

			return res.status(200).send( characters.Characters);
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
router.get("/validates", async (req, res) => {
	

	let user = await Users.findAll();
	user= user.map((e)=>({email:e.email,
		userName:e.userName}))

	return res.send(user);
});

router.get("/login", async (req, res) => {
	const{email} = req.query
	if(email){
		let user = await Users.findOne({
			where: {
				email: email
		
			},
		});
		if(!user){

		return res.send("pibe registrate");
		}
		return res.send(user);
	}else{
		return res.send("password y/o userName incompletos")
	}
});

module.exports = router;





// <div>

// <div></div>
// <Link className='link_card' to={`/homeComics/DetailComic/${id}`}>
//            <div className='container_card'>
//                 <div className='img_card_container'>
//                 <img className='img_card' src={image} alt={title} />
//                 </div>
//                 <div className='detail_card_container'>
//                    <p className='name_comic_card'>{title}</p>
//                 </div>
//             </div>
//         </Link>
// </div>