import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterId, postFavoriteCharacters } from "../../../Redux/Actions/actions";
//import ReactStars from "react-rating-stars-component";
import MyButton from "../../../Styles/MyButton";
import Loading from "../../Loading/Loading"
//import Container from "@material-ui/core/Container";
//import Typography from "@material-ui/core/Typography";
import Navbar from "../../Navbar/Navbar";
import "./DetailCharacter.css"


const DetailCharacter = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  
   const postFavorite = useSelector((state) => state.CharactersReducer)
    const character = useSelector((state) => state.CharactersReducer.detailCharacter);

    
    useEffect(() => {
      dispatch(getCharacterId(id));
    }, [dispatch, id]);
 
    const handleClick = (e) => {
    
      console.log("estrellita")
      
      let arrayIds = [...postFavorite.favoritesComics]
      arrayIds=arrayIds.map(e=>e.idPrincipal)
      console.log("arrayIds")
      console.log(arrayIds)
      if (!arrayIds.includes(postFavorite.detailCharacter[0].idPrincipal)) {
        // setSelect([...select, event.target.value]);
        
        console.log("entre al if not find")
        console.log([...postFavorite.favoritesComics,postFavorite.detailCharacter[0]])
        arrayIds = [...arrayIds,postFavorite.detailCharacter[0].idPrincipal]
        console.log("arrayIds")
        console.log(arrayIds)
        dispatch(postFavoriteCharacters(arrayIds,postFavorite.loginUser.id))
        
      } else {
        let fil= arrayIds.filter((e) => e !== postFavorite.detailCharacter[0].idPrincipal)
        // console.log([...postFavorite.favoritesComics,postFavorite.detailCharacter[0]])
       console.log("fil")
       console.log(fil)
       dispatch(postFavoriteCharacters(fil,postFavorite.loginUser.id))
        }
      
      // dispatch(postFavoriteComics(postFavorite.loginUser.id,postFavorite.favoritesComics) )
      
        };





return character.length === 0 ? (
    <Loading/>
        ) : (
              <>
                <div>
                    <div className="container">
                      <div className="details_container">
                            <div className="header">
                                  <h4>{character[0].name}</h4>
                                  <h3>{character[0].description}</h3> 
                                <img className="img" src={character[0].profilePic} alt='img' ></img>
                            </div>
                      </div>
                      <MyButton className="randomchar__name" variant="contained"  style={{ color: "red" }}  onClick={() => handleClick()}> Agregar a Favorito ⭐</MyButton>
                      </div>
                  </div>
                <Navbar />          
              </>
          );
}

export default DetailCharacter