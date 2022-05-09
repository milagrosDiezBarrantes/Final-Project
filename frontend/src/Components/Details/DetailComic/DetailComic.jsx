import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById, postFavoriteComics,loginUser,getFavorites } from "../../../Redux/Actions/actions";
import { getByCreators } from "../../../Redux/Actions/FilterOrderActions";
import ReactStars from "react-rating-stars-component";
import MyButton from "../../../Styles/MyButton";
//import Container from "@material-ui/core/Container";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";

import "./DetailComic.css";
import Loading from "../../Loading/Loading";


const DetailComic = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const comics = useSelector((state) => state.ComicsReducer);
  let detail = comics.selectedComic;
  const creators = useSelector((state) => state.ComicsReducer.copyComics);

  const [show, setShow] = React.useState(true);

//////////////////FAVORITE//////////
const postFavorite = useSelector((state) => state.ComicsReducer)
// console.log(postFavorite);
// console.log(postFavorite.loginUser.id);


const [input, setInput] = React.useState({})

function handleChange(event){
  setInput({
      ...input, [event.target.id]:event.target.id 
  })
}
function handleSubmit(event){
  event.preventDefault()
    dispatch(postFavoriteComics(input))
    alert('Guardado con exito')
    setInput({idComics:''})
  }
      
////////////////FAVORITE//////////////      



  useEffect(() => {
    dispatch(getById(id));
    dispatch(loginUser({
      "userName":"lamilirodriguez",
      
      "password":"1235sdf4"
      }));
    setShow(true);
  }, [dispatch, id]);

  useEffect(() => {
    
      dispatch(getFavorites(postFavorite.loginUser.id))
  }, [ postFavorite.loginUser.id]);

  // if(postFavorite.loginUser.id&&!postFavorite.favoritesComics){
  //   dispatch(getFavorites(postFavorite.loginUser.id));
  // }
  
  

  const handleClick = (e) => {
    
console.log("estrellita")

dispatch(postFavoriteComics(postFavorite.loginUser.id,[...postFavorite.favoritesComics,])

  };

  const img = (comic)=>{
    let img = null
    if(comic.images){
      img =`${comic.images[0]?.path}.${comic.images[0]?.extension}`
      return img
    }
    if(comic.img){
      return comic.img
    }
  }
  return detail.length === 0 ? (
    <Loading/>
  ) : (
    <>
      <div className="container">
        <img
          src={detail[0].img}
          class="featured"
          alt={detail[0].title}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            height: "35rem",
            width: "30rem",
            borderRadius: "10px",
            textAlign: "center",
          }}
        />

      
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
          <h1>
            <strong>{detail[0].title}</strong>
          </h1>
          <p
            style={{
              fontFamily: "Abril Fatface",
              textAlign: "center",
              color: "white",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            class="bodytext"
          >
            {detail[0].description}
          </p>

          {/* <p class="bodytext" style={{fontFamily:' Helvetica' , textAlign:'center',color:"white"}}>{detail[0].description}</p> */}
          {detail[0].creators?.map((creator) => (
            <div class="role" key={creator.creatorId}>
              <strong>{creator.creatorRole}</strong>
              <br />
              <button value={creator.creatorId} onClick={handleClick}>
                {creator.creatorName}
              </button>
            </div>
          ))}
          <div class="options">
            <MyButton href="/lecture" style={{ color: "white" }}>
              Read
            </MyButton>
            <MyButton style={{ color: "white" }}>Serie</MyButton>
          </div>
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <ReactStars></ReactStars>
          </div>
        </div>
        <div style={{overflow:'hidden', height:'700px'}}>
        <div style={{overflow:'hidden', height:'700px'}}>
        <div style={{overflow:'scroll-behavior: smooth' }}>
        {show? 
        null 
        : creators &&
            creators?.map((comic) => (
        <Link

               className="link_card"
                to={`/homeComics/DetailComic/${comic.id}`}
              >
              <img
                  src= {img(comic) }
                  alt= 'Not available'
                  style={{ width: "100px", height: "100px" }}
                />
                <h3>{comic.title}</h3>
              </Link>
            ))}
            </div>
            </div>

        </div>

      </div>
      <Navbar />
      <div>
        <button className="favoritesComics" type="button"  onClick={(event) => handleClick(event)}>⭐</button>
        </div>
    </>
  );
};

export default DetailComic;
