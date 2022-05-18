const server = require("./src/app.js");
const { conn } = require("./src/db.js");

conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`%s listening at ${process.env.PORT}`);
  });
});
/*hola que hace */

setTimeout(() => {
	const { Plans, Users,Comics } = require("./src/db.js");

var superAdmin = Users.findOrCreate({
	where: {
		email: "soyadmin@henry.com",
		password: 'admin123',
		name: "Henry Hero",
		nickname: "Henry-Hero",
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

  const UltimateSpiderman = Comics.findOrCreate({where:{
  
    title:"Ultimate Spiderman",
    img:"https://2.bp.blogspot.com/vEjA_hhJuxt1mlpg-tMN7vzNz7xeWqdv8OKCJlPy5BofEyjMRajqtbqtADDaQpOcrw7TOfCqJmJaeRxz-b5HQRzKCBdjwQnhcQk-hHp_22wts0LgmX7CYtf1hxaa_rTQzyJ83466lw=s0",
    pages:54,
    description:"The Spiderman In Action"
    
  }})
const LosVengadoresAcosoNuncaMas = Comics.findOrCreate({where:{
    title:"Los Vengadores Acoso Nunca Mas",
    img:"https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/eb92952db8a4f7c44fbee7d4abf960b6/thumb_1200_1719.png",
    pages:54,
    description:"The Avengers Adventures"
    
  }})

  let planes = Plans.findAll();

Promise.all([plan1, plan2, plan3, plan4, superAdmin, planes,BatmanSpiderman,UltimateSpiderman,LosVengadoresAcosoNuncaMas])
	.then((res) => {
		console.log([plan1, superAdmin]);
	})
	.then((res) => {
		console.log([BatmanSpiderman,UltimateSpiderman,LosVengadoresAcosoNuncaMas]);
	});//54465

