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
    </> 

  )
}

export default Favorite;