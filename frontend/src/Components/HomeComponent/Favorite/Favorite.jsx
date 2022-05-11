import React from 'react';
import ImgSlider from './ImgSlider';
import Viewer from './Viwers';
import NavBar from '../../Navbar/Navbar.jsx';
import { useSelector, useDispatch } from 'react-redux';
import ComicCard from "../../Cards/ComicCard/ComicCard";

const Favorite = () => {
  
  const dispatch = useDispatch()
  const favoritesComics = useSelector((state) => state.ComicsReducer.favoritesComics)
   
  return(
    <>
   { /* dataUser.role === "USER"?{  */ }
    <>
     <NavBar/>
     <ImgSlider /> 
      <Viewer />
      <h1>HERE ARE YOUR FAVOURITES </h1>
      <div className="grid">
        {favoritesComics &&
          favoritesComics.map(({ id, title, img }) => {
            return <ComicCard key={id} id={id} title={title} image={img} />;
          })}
      </div>
    </> 
   { /* }: { } */  }
    </> 

  )
}

export default Favorite;