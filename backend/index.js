
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
});

const { Comics } = require('../backend/src/db');
var catAutos =  Comics.findOrCreate({
  where:{
    id:100003,
  title:"The Amazing Henry-Man",
  img:"https://wallpapers.com/images/high/venom-comic-book-yiq4h1381bwpvr8l.jpg",
  pages:50,
  banner:true,
  creators:["HENRYs"]
},

});

var catDeportes =  Comics.findOrCreate({
  where:{
    id:100002,
    title:"The Amazing Henry-Man 2",
    img:"https://wallpapers.com/images/high/red-deadpool-comic-book-o0acbz3rtrkq1on6.jpg",
    pages:50,
    banner:true,
    creators:["HENRYs"]
  },

});

var catVideojuegos =  Comics.findOrCreate({
  where:{
    id:100001,
    title:"The Amazing Henry-Man 3",
    img:"https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/66/Captain_Marvel_-_P%C3%B3ster_Diciembre_2018.png/revision/latest?cb=20191029195629&path-prefix=es",
    pages:50,  
    banner:true,
    creators:["HENRYs"]
  },

});

var catVideojuegos2 =  Comics.findOrCreate({
  where:{
    id:100004,
    title:"The Amazing Henry-Man 4",
  img:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_940x529/public/media/image/2016/08/15-seres-mas-poderosos-marvel-comics_2.jpg?itok=LowwWYhz",
  pages:50,
  banner:true,
  creators:["HENRYs"]
},

});


Promise.all([catAutos, catDeportes, catVideojuegos,catVideojuegos2])
  .then(res => {
    console.log([catAutos, catDeportes, catVideojuegos,catVideojuegos2]);
  });


