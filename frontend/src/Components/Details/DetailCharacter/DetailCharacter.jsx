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
import "./DetailCharacter.css"
import { useAuth0 } from "@auth0/auth0-react";  


const DetailCharacter = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {user, isLoading, isAuthenticated} = useAuth0();

  
   const favoritesCharacters = useSelector((state) => state.CharactersReducer.favoritesCharacters)
   const detailCharacter = useSelector((state) => state.CharactersReducer.detailCharacter)
    const character = useSelector((state) => state.CharactersReducer.detailCharacter);

  //   {
  //     Characters: [],
  //     copyCharacters: [],
  //     detailCharacter: [],
  //     creators:[],
  //     copyCreators:[],
  //     favoritesCharacters: []
  // }
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
        
      } else {
        let fil= arrayIds.filter((e) => e !== detailCharacter.idPrincipal)
        // console.log([...postFavorite.favoritesComics,postFavorite.detailCharacter])
       console.log("fil")
       console.log(fil)
       dispatch(postFavoriteCharacters(fil,user.email))
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
                              
                              <div>
                                  <h2>Name</h2>
                                  <h4>{character.name}</h4>
                                  <h2>Description</h2> 
                                  <h3>{character.description}</h3> 
                                  <h2>Comics</h2> 
                                  {character.comics.length>0&&character.comics.map(e=>(
                                    <button value={e.id} >{e.name}</button>
                                  ))}
                                  <h2>Series</h2> 
                                  {character.series.length>0&&character.series.map(e=>(
                                    <button value={e.id} >{e.name}</button>
                                  ))}                                 
                                   <h2>Stories</h2> 
                                   {character.stories.length>0&&character.stories.map(e=>(
                                    <button value={e.id} >{e.name}</button>
                                  ))}
                                   <h2>Events</h2> 
                                   {character.events.length>0&&character.events.map(e=>(
                                    <button value={e.id} >{e.name}</button>
                                  ))}
                                  <div>
                                <img className="img" src={character.img} alt='img' ></img>

                              </div>
                              </div>
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