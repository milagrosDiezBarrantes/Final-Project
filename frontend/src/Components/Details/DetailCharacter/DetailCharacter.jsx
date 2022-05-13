import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterId } from "../../../Redux/Actions/actions";
//import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading"

import MyButton from "../../../Styles/MyButton";
//import Container from "@material-ui/core/Container";
//import Typography from "@material-ui/core/Typography";
import Navbar from "../../Navbar/Navbar";
import "./DetailCharacter.css"


const DetailCharacter = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
  
    const character = useSelector((state) => state.CharactersReducer.detailCharacter);
    let defaul = "This hero / heroine is on vacation at the moment and nope he accepts the interviews to be able to bring you the information up to date, we will get it for you shortly"
    
    useEffect(() => {
      dispatch(getCharacterId(id));
      console.log(character)
    }, [dispatch, id]);
 
return character.length === 0 ? (
     <Loading/>
        ) : (
              <>
                <div>
                    <div className="container">
                      <div className="details_container">
                            <div className="header">
                                  <h4>{character.name}</h4>
                                  <h3>{character.description?character.description:defaul}</h3> 
                                <img className="img" src={character.profilePic} alt='img' ></img>
                                <div className="GridContained">
                                {
                                character.comics? character.comics.map(comic=>{
                                  let id = comic.resourceURI.split("/")
                                  id = id[id.length-1]
                                  console.log(id)
                                  return (
                                    <Link to={`/homeComics/DetailComic/${id}`}><button>{comic.name}</button></Link>
                                  )
                                  }):null}

                                </div>
                            </div>
                      </div>
                      </div>
                  </div>
                <Navbar />          
              </>
          );
}

export default DetailCharacter