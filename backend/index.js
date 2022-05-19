const server = require("./src/app.js");
const { conn } = require("./src/db.js");

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`%s listening at ${process.env.PORT}`);
  });
});
/*hola que hace */

setTimeout(() => {
	const { Plans, Users,Comics } = require("./src/db.js");

var superAdmin = Users.findOrCreate({
	where: {
		email: "Milagrosdiezbarrantes@gmail.com",
		password: 'mili123',
		name: "Milagros Berrantes",
		nickname: "La-Mili",
		role: "ROLE_SUPER_ADMIN",
	},
});
var superAdmin2 = Users.findOrCreate({
	where: {
		email: "281212.namaste@gmail.com",
		password: 'alex123',
		name: "Alex Wolf",
		nickname: "The-Machine",
		role: "ROLE_SUPER_ADMIN",
	},
});
var plan1 = Plans.findOrCreate({
	where: {
		name: "monthly",
		amount: 7,
	},
});

var plan2 = Plans.findOrCreate({
	where: {
		name: "annual",
		amount: 70,
	},
});
var plan3 = Plans.findOrCreate({
	where: {
		name: "admin",
		amount: 0,
	},
});
var plan4 = Plans.findOrCreate({
	where: {
		name: "superAdmin",
		amount: 0,
	},
});
const BatmanSpiderman = Comics.findOrCreate({where:{
    title:"Batman & Spiderman",
    img:"https://online.anyflip.com/zyvcm/hgvz/files/mobile/1.jpg?1606828234",
    pages:54,
    description:"The CrosOver whit Batman and Spiderman"
    
  }})


const LosVengadoresAcosoNuncaMas = Comics.findOrCreate({where:{
    title:"Los Vengadores Acoso Nunca Mas",
    img:"https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/eb92952db8a4f7c44fbee7d4abf960b6/thumb_1200_1719.png",
    pages:54,
    description:"The Avengers Adventures"
    
  }})

  let planes = Plans.findAll();

Promise.all([plan1, plan2, plan3, plan4, superAdmin,superAdmin2, planes,BatmanSpiderman,LosVengadoresAcosoNuncaMas])
	.then((res) => {
		console.log([plan1, superAdmin]);
	})
	.then((res) => {
		console.log([BatmanSpiderman,LosVengadoresAcosoNuncaMas]);
	});//54465
},15000)