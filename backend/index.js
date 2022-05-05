
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
});

/* const { Comics } = require('../backend/src/db');
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
    img:"https://wallpapers.com/wallpapers/sitting-thanos-comic-book-tfb685lrvo6g6b0b.html",
    pages:50,  
    banner:true,
    creators:["HENRYs"]
  },

});

var catVideojuegos2 =  Comics.findOrCreate({
  where:{
    id:100004,
    title:"The Amazing Henry-Man 4",
  img:"https://wallpapers.com/wallpapers/the-joker-comic-book-ar6jo7r3w1y7bflt.html?embed=true",
  pages:50,
  banner:true,
  creators:["HENRYs"]
},

});


Promise.all([catAutos, catDeportes, catVideojuegos,catVideojuegos2])
  .then(res => {
    console.log([catAutos, catDeportes, catVideojuegos,catVideojuegos2]);
  });
 */
