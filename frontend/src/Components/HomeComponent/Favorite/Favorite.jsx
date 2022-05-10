import React from 'react';
import ImgSlider from './ImgSlider';
import Viewer from './Viwers';
import NavBar from '../../Navbar/Navbar.jsx';


const Favorite = () => {
  

  return(
    <>
     <NavBar/>
    <ImgSlider /> 
      <Viewer />
      <h1>HERE ARE YOUR FAVOURITES </h1>
    </> 

  )
}

export default Favorite;