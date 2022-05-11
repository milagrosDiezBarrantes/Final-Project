import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterId } from "../../../Redux/Actions/actions";
//import ReactStars from "react-rating-stars-component";

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

    
    useEffect(() => {
      dispatch(getCharacterId(id));
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
                                  <h3>{character.description}</h3> 
                                <img className="img" src={character.profilePic} alt='img' ></img>
                            </div>
                      </div>
                      </div>
                  </div>
                <Navbar />          
              </>
          );
}

export default DetailCharacter