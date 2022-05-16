const { Router } = require("express");
const { Sequelize, Model } = require("sequelize");
const axios = require("axios");
let { API_KEY, HASH_KEY } = process.env;
const {
  Users,
  Plans,
  Favorites_comics,
  Favorites_characters,
  Characters,
  Comics,
} = require(`../db`);

const router = Router();

router.post("/", async (req, res) => {
  const { email, name, nickname, picture, plan_id, role } = req.body;
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
        name,
        nickname,
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
    return res
      .status(200)
      .json({ mensaje: "algo pasó con el post del user chequea los campos" });
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
    console.log(id);
    console.log(user);

    await user.update({
      email: req.body.email,
      name: req.body.name,
      nickname: req.body.userName,
      password: req.body.password,
      picture: req.body.picture,
      plan_id: req.body.plan_id,
      role: req.body.role,
    });

    return res.status(201).json({ user });
  } catch (error) {
    console.log(error, "error en la ruta put user");
  }
});

router.get("/:email", async (req, res) => {
  // const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
  const { email } = req.params;

  try {
    console.log(email);
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });
    return res.status(201).json({ user });
  } catch (error) {
    console.log(error);
  }
});

router.post("/favoritesComics", async (req, res) => {
  //axios.post(localhost://3000/user/favoritesComics,{id:iduser,idcomics:favorites})
  // const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
  const { email, idComics } = req.body; //idComics = [idscomics1,idcomics2](UUID4)

  try {
    console.log(email);
    const user = await Users.findOne({
      include: Comics,
      where: {
        email: email,
      },
    });
    console.log("soy idComics", idComics);
    user.setComics(idComics);

    return res.status(200).send(user);
  } catch (error) {
    console.log(error, "error en la ruta post/favorites");
  }
});

router.get("/favoritesComics/:email", async (req, res) => {
  // const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
  const { email } = req.params; //emailComics = [emailscomics1,emailcomics2](UUemail4)

  try {
    console.log(email);
    const favorites = await Users.findOne({
      include: Comics,
      where: {
        email: email,
      },
    });
    console.log(favorites);
    return res.status(200).send(favorites.Comics);
  } catch (error) {
    console.log(error, "error en la ruta post/favorites");
  }
});
router.post("/favoritesCharacters", async (req, res) => {
  // const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
  const { email, idCharacters } = req.body;

  try {
    console.log(email);
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });
    user.setCharacters(idCharacters);

    return res.status(201).json(user);
  } catch (error) {
    console.log(error, "error en la ruta post/favorites");
  }
});

router.get("/favoritesCharacters/:email", async (req, res) => {
  // const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
  const { email } = req.params; //emailComics = [emailscomics1,emailcomics2](UUemail4)

  try {
    console.log(email);
    const characters = await Users.findOne({
      include: Characters,
      where: {
        email: email,
      },
    });

    return res.status(200).send(characters.Characters);
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
  user = user.map((e) => ({ email: e.email, nickname: e.nickname }));

  return res.send(user);
});
//NO CAMBIAR NADA SIN PREGUNTAR PORQUE SE ROMPE EL LOGUEO _/\_
router.post("/login", async (req, res, next) => {
  let { email, name, nickname } = req.body;
  console.log(req.body);

  let userOld = await Users.findOne({
    where: {
      email: email,
    },
  });
  if (userOld) {
    return res.status(200).json({ userOld });
  }
  try {
    let user = await Users.create({
      email: email,
      firstname: nickname,
      nickname: nickname,
      name: name,
    });
    return res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.get("/login", async (req, res) => {
  let { email } = req.query;

  try {
    let userOld = await Users.findOne({
      where: {
        email: email,
      },
    });

    return res.status(201).json(userOld);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/:email", async (req, res, next) => {
  let { email } = req.params;
  console.log("recibo email en ruta put", email);
  let { nickname, name, picture } = req.body;
  console.log("recibo input x body en ruta put", req.body);

  try {
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });
    // if (user) {
    // 	console.log('entra al if porque email existe t', email)
    await user.update({
      email: email,
      nickname: nickname,
      name: req.body.name,
      picture: req.body.picture,

      // updated_at: req.body.name,
      // email_verified: req.body.email_verified,
      // sub: req.body.sub,
    });

    // await user.save();
    console.log("USER UPDATED EN EL BACKEND", user);
    return res.status(200).json({ user });
    // }else{
    // 	return res.status(404).json({Msg: "User not found"})
    // }
  } catch (error) {
    next(error);
  }
});



// ADMIN

router.get('/admin/:email', async (req, res, next) => {
	const { email } = req.params;
	try {
		const userAdmin = await Users.findOne({
			where:{
				email: email,
				role: 'ROLE_SUPER_ADMIN', 
			}})
			if(userAdmin) {
				return res.status(200).json(
					userAdmin
				)
			}
			else {
				return res.status(404).json({
					message: 'User not found',
					error
				})
			}
		}
	catch(error) {
		res.status(404).json({
			message: 'User not found',
			error
		})
	}
})
// router.get("/byid", async (req, res) => {
// 	// const {  email, firstName, lastName, userName, age, password, picture } =    req.body;
// 	const { id } = req.body;

// 	try {
// 		console.log(id);
// 		const user = await Users.findOne({
// 			where: {
// 				id: id,
// 			},
// 		});

// 		return res.status(201).json({ user });
// 	} catch (error) {
// 		console.log(error, "error en la ruta put user");
// 	}
// });

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
