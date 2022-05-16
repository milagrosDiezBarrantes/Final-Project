import React from 'react';
import ImgSlider from './ImgSlider';
import Viewer from './Viwers';
import NavBar from '../../Navbar/Navbar.jsx';
import { useSelector, useDispatch } from 'react-redux';
import ComicCard from "../../Cards/ComicCard/ComicCard";
import { getAllComics, getFavorites,getFavoritesCharacters } from "../../../Redux/Actions/actions";
import styled from "styled-components";
import './Favorite.css';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { useAuth0 } from "@auth0/auth0-react";  
import { useEffect } from 'react';
import Footer from "../Footer/Footer";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Favorite = () => {
  
  const {user, isLoading, isAuthenticated} = useAuth0();
  const dispatch = useDispatch()
  /* */
  const favoritesComics = useSelector((state) => state.ComicsReducer.favoritesComics)
  const copyComics = useSelector((state) => state.ComicsReducer.copyComics)
  const favoritesCharacters = useSelector((state) => state.CharactersReducer.favoritesCharacters)
   console.log(favoritesComics)

   useEffect(() => {
    if(user.email){
      dispatch(getFavorites(user.email))
      dispatch(getFavoritesCharacters(user.email))
      
    }
  }, [user]);
   useEffect(() => {
    dispatch(getAllComics());
  }, [dispatch]);
 
  const loginUser= useSelector((state) => state.ComicsReducer.favoritesComics);

/*   if(!Object.keys(favoritesComics).length&&!Object.keys(loginUser).length){
     console.log("vacio")
     dispatch(loginUser("soyadmin@marvel.com"))
     dispatch(getFavorites(loginUser.id))
   }else{
     console.log("tiene algo")
   }
   console.log(Object.keys(Object).length)
*/
let recomended = [];
if(copyComics.length>0){

  for (let i = 0; i < 10; i++) {
    recomended.push(copyComics[Math.floor(Math.random()*copyComics.length)])
  }
  
}
return(
  <>
 
   { /* dataUser.role === "USER"?{  */ }
  
     <NavBar/>
     <ImgSlider /> 
      <h1>HERE ARE YOUR FAVOURITES </h1>
   <seccion>
      <h2>COMICS</h2>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
                  {favoritesComics.length>0 &&
          favoritesComics.map(({ id, title, img }) => {
            return <ComicCard key={id} id={id} title={title} image={img} />;  })}
        </Carousel>
      </div>
    </seccion>

     <seccion>
      <h2>CHARACTERS</h2>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
        {favoritesCharacters.length>0 &&
          favoritesCharacters.map(({ id, title,  idPrincipal, img }) => {
            return <ComicCard key={id} id={id} idPrincipal={idPrincipal} title={title} image={img} />;})}
        </Carousel>
      </div>
      </seccion>

      <seccion>
      <h2>RECOMENDED FOR U ❤</h2>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
        {recomended && recomended.length>0 &&
          recomended.map(({ id, title,  idPrincipal, img }) => {
            return <ComicCard key={id} id={id} idPrincipal={idPrincipal} title={title} image={img} />;
          })}
        </Carousel>
      </div>
      </seccion>
      <Footer />
    
    { /* }: { } */  }

  </>  
  )
}

export default Favorite;


