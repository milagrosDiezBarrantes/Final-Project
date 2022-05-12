import React from 'react';
import ImgSlider from './ImgSlider';
import Viewer from './Viwers';
import NavBar from '../../Navbar/Navbar.jsx';
import { useSelector, useDispatch } from 'react-redux';
import ComicCard from "../../Cards/ComicCard/ComicCard";
import { getFavorites } from "../../../Redux/Actions/actions";
import styled from "styled-components";
import './Favorite.css';
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


const Favorite = () => {
  
  const dispatch = useDispatch()
  const favoritesComics = useSelector((state) => state.ComicsReducer.favoritesComics)
   console.log(favoritesComics)


 
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

      <>
      <h1>RECOMMENDED FOR YOU </h1>
     <div className="App">
        <Carousel breakPoints={breakPoints}>
          <div class="cards"><div class="item">
            
            <div class="item-img">
                <img src={"https://www.bigbasket.com/media/uploads/p/xxl/40033819-2_6-fresho-apple-shimla.jpg"} /> 
            </div>
            <div class="details">
                <div class="type">
                    <b>
                        fdgdfgdkg<br/>
                        dfgdgf<br/>
                        dfgdfg<br/><br/>
                    </b>
                </div>
                <div class="price">
                    <b>₹220</b>
                </div>
            </div>

        </div></div>  
          <div class="cards"><div class="item">
            
            <div class="item-img">
                <img src={" "} />
            </div>
            <div class="details">
                <div class="type">
                    <b>
                        nombre<br/>
                        nombre:XYZ<br/>
                        nombre:ABC<br/><br/>
                    </b>
                </div>
                <div class="price">
                    <b>nombre</b>
                </div>
            </div>
        </div></div> 
          <div class="cards"><div class="item">
            <div class="item-img">
                <img src={"https://produits.bienmanger.com/36700-0w0h0_Organic_Red_Onion_From_Italy.jpg"} />
            </div>
            <div class="details">
                <div class="type">
                    <b>
                    nombre<br/>
                    nombre:XYZ<br/>
                    nombre:ABC<br/><br/>
                    </b>
                </div>
                <div class="price">
                    <b>nombre</b>
                </div>
            </div>
        </div></div> 
          <div class="cards"><div class="item">
            <div class="item-img">
                <img src={" "} />  
            </div>
            <div class="details">
                <div class="type">
                    <b>
                    nombre-2kg<br/>
                    nombre<br/>
                    nombre<br/><br/>
                    </b>
                </div>
                <div class="price">
                    <b>nombre</b>
                </div>
            </div>
        </div></div> 
          <div class="cards"><div class="item">
            <div class="item-img">
                <img src={" "} />
            </div>
            <div class="details">
                <div class="type">
                    <b>
                    nombreg<br/>
                        SnombreZ<br/>
                        LnombreC<br/><br/>
                    </b>
                </div>
                <div class="price">
                    <b>nombre</b>
                </div>
            </div>
        </div></div> 
          <div class="cards"><div class="item">
            <div class="item-img">
                <img src={"https://www.bigbasket.com/media/uploads/p/xxl/40033819-2_6-fresho-apple-shimla.jpg"} />
                <div class="overlay">
                    <a href="#" class="buy-btn"></a>
                </div>
            </div>
            <div class="details">
                <div class="type">
                    <b>
                        gdfgdfg<br/>
                        dfgdfg:XYZ<br/>
                        fghfgh:ABC<br/><br/>
                    </b>
                </div>
                <div class="price">
                    <b>fghgh</b>
                </div>
            </div>
        </div></div> 
          <div class="cards"><div class="item">
            <div class="item-img">
                <img src={"https://www.bigbasket.com/media/uploads/p/xxl/40033819-2_6-fresho-apple-shimla.jpg"} />
                
            </div>
            <div class="details">
                <div class="type">
                    <b>
                        Afghfghf<br/>
                        SenbnvbnZ<br/>
                        vbnvnC<br/><br/>
                    </b>
                </div>
                <div class="price">
                    <b>vbnvbn</b>
                </div>
            </div>
        </div></div> 
          <div class="cards"><div class="item">   
            <div class="item-img">
                <img src={"https://www.bigbasket.com/media/uploads/p/xxl/40033819-2_6-fresho-apple-shimla.jpg"} />    
            </div>
            <div class="details">
                <div class="type">
                    <b>
                        ghfghg<br/>
                        fghfgh<br/>
                        Lfghfgh<br/><br/>
                    </b>
                </div>
                <div class="price">
                    <b>fghgfh</b>
                </div>
            </div>
        </div></div> 
          <div class="cards"><div class="item">
            <div class="item-img">
                <img src={"https://www.bigbasket.com/media/uploads/p/xxl/40033819-2_6-fresho-apple-shimla.jpg"} /> 
            </div>
            
        </div></div> 
          <div class="cards"><div class="item">
            <div class="item-img">
                <img src={"g"} />
            </div>
            

        </div></div> 
        </Carousel>
      </div>
    </>

    </> 
   { /* }: { } */  }
    </> 
  )
}

export default Favorite;


