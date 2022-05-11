
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
});


const { Plans } = require('../backend/src/db');
var plan1 =  Plans.findOrCreate({
  where:{
    name:"monthly",
    amount:7
},

});

var plan2 =  Plans.findOrCreate({
  where:{
    name:"annual",
    amount:70
  },

});
var plan3 =  Plans.findOrCreate({
  where:{
    name:"admin",
    amount:0
  },

});


let planes= Plans.findAll()

Promise.all([plan1,plan2,planes,plan3])
  .then(res => {
    console.log([plan1,plan2]);
  }).then(res => {
    console.log(planes.Promise);
  });
