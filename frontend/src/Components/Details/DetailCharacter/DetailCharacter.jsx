import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterId, postFavoriteCharacters,getFavoritesCharacters } from "../../../Redux/Actions/actions";
//import ReactStars from "react-rating-stars-component";
import MyButton from "../../../Styles/MyButton";
import Loading from "../../Loading/Loading"
//import Container from "@material-ui/core/Container";
//import Typography from "@material-ui/core/Typography";
import Navbar from "../../Navbar/Navbar";
import "./DetailCharacter.scss"
import { useAuth0 } from "@auth0/auth0-react";  
import ReactStars from "react-rating-stars-component";


const DetailCharacter = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {user, isLoading, isAuthenticated} = useAuth0();

   const favoritesCharacters = useSelector((state) => state.CharactersReducer.favoritesCharacters)
   const detailCharacter = useSelector((state) => state.CharactersReducer.detailCharacter)
    const character = useSelector((state) => state.CharactersReducer.detailCharacter);


    useEffect(() => {
      dispatch(getCharacterId(id));
    }, [dispatch, id]);
 
    useEffect(() => {
      if(user.email){
        dispatch(getFavoritesCharacters(user.email))
      }
    }, [user]);

    const handleClick = (e) => {
    
      console.log("estrellita")
      
      let arrayIds = [...favoritesCharacters]
      arrayIds=arrayIds.map(e=>e.idPrincipal)
      console.log("arrayIds")
      console.log(arrayIds)
      if (!arrayIds.includes(detailCharacter.idPrincipal)) {
        // setSelect([...select, event.target.value]);
        
        console.log("entre al if not find")
        console.log([...favoritesCharacters,detailCharacter])
        arrayIds = [...arrayIds,detailCharacter.idPrincipal]
        console.log("arrayIds")
        console.log(arrayIds)
        dispatch(postFavoriteCharacters(arrayIds,user.email))
        alert('¡Agregado a Favorito con Éxito!')

      } else {
        let fil= arrayIds.filter((e) => e !== detailCharacter.idPrincipal)
        // console.log([...postFavorite.favoritesComics,postFavorite.detailCharacter])
       console.log("fil")
       console.log(fil)
       dispatch(postFavoriteCharacters(fil,user.email))
       alert('Eliminado de Favorito!')

        }
      
      // dispatch(postFavoriteComics(postFavorite.loginUser.id,postFavorite.favoritesComics) )
      
        };

return character.length === 0 ? (
     <Loading/>
        ) : (
<> 
<div  className="randomchar">
  <img className="randomchar__img" 
   src={character.img} 
   alt='img'
   style={{
              marginLeft: "center",
              marginRight: "center",
              height: "35rem",
              width: "30rem",
              borderRadius: "10px"}}
 ></img>
  <p className="randomchar__name" >
    NAME: <br></br> {character.name} <br></br><br></br>
    DESCRIPTION: <br></br> {character.description} <br></br><br></br>
    <MyButton className="randomchar__name" variant="contained"  style={{ color: "red" }}  onClick={() => handleClick()}> Agregar a Favoritos ⭐</MyButton>
  </p>
  </div>

 <section class="main-container">

   <div className="sedans">
    <h2> STORIES</h2>
    <p> {character.stories.length>0&&character.stories.map(e=>(
         <p value={e.id} >{e.name}</p> ))}
       </p>
   </div>

   <div className="suvs">
    <h2> COMICS</h2>
    <p>  {character.comics.length>0&&character.comics.map(e=>( <p  className="randomchar__descr" value={e.id}> {e.name}</p>))}  </p>
   </div>

   <div className="luxury">
    <h2>SERIES </h2>
    <p>  {character.comics.length>0&&character.comics.map(e=>(<p className="info-tag" value={e.id}> {e.name}</p>))} </p>
   </div>
 </section>

         <Navbar /> 
          
</>   
 );
}

export default DetailCharacter;

