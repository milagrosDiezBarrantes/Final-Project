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

import "./DetailComic.scss";
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

    
////////////////FAVORITE//////////////      

  useEffect(() => {
    dispatch(getById(id));
    dispatch(loginUser({
      "userName":"lamilirodriguez",
      
      "password":"1235sdf4"
      }));
    setShow(true);
  }, [dispatch]);

  useEffect(() => {
    if(postFavorite.loginUser.id){
      dispatch(getFavorites(postFavorite.loginUser.id))
    }
  }, [ postFavorite.loginUser.id]);

  // if(postFavorite.loginUser.id&&!postFavorite.favoritesComics){
  //   dispatch(getFavorites(postFavorite.loginUser.id));
  // }

 const handleClick = (e) => {
    
console.log("estrellita")

let arrayIds = [...postFavorite.favoritesComics]
arrayIds=arrayIds.map(e=>e.idPrincipal)
console.log("arrayIds")
console.log(arrayIds)
if (!arrayIds.includes(postFavorite.selectedComic[0].idPrincipal)) {
  // setSelect([...select, event.target.value]);
  
  console.log("entre al if not find")
  console.log([...postFavorite.favoritesComics,postFavorite.selectedComic[0]])
  arrayIds = [...arrayIds,postFavorite.selectedComic[0].idPrincipal]
  console.log("arrayIds")
  console.log(arrayIds)
  dispatch(postFavoriteComics(arrayIds,postFavorite.loginUser.id))
  
} else {
  let fil= arrayIds.filter((e) => e !== postFavorite.selectedComic[0].idPrincipal)
  // console.log([...postFavorite.favoritesComics,postFavorite.selectedComic[0]])
 console.log("fil")
 console.log(fil)
 dispatch(postFavoriteComics(fil,postFavorite.loginUser.id))
  }

// dispatch(postFavoriteComics(postFavorite.loginUser.id,postFavorite.favoritesComics) )

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
  <div className="randomchar__block">
  <img className="randomchar__img"
            src={detail[0].img}
            alt={detail[0].title}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              height: "35rem",
              width: "30rem",
              borderRadius: "10px"}}
          />
          <div className="randomchar">
  <div className="randomchar__block">
       <br></br>
        <div className="randomchar__name" class="options">
           <p className="randomchar__name" >{detail[0].title}</p>
            <p className="randomchar__descr" class="bodytext">
              {detail[0].description}
            </p>
            <MyButton className="randomchar__name" variant="contained" href="/lecture/a" style={{ color: "red" }}>
                Read
              </MyButton> <br></br><br></br> 
              <MyButton className="randomchar__name" variant="contained"  style={{ color: "red" }}>Serie</MyButton><br></br><br></br>
              <ReactStars></ReactStars>
              <div> <br></br><br></br>
              <MyButton className="randomchar__name" variant="contained"  style={{ color: "red" }}  onClick={() => handleClick()}> Agregar a Favorito ⭐</MyButton>
              </div>
        </div>
    </div>
    <div className="randomchar__block">
     
            <div className="randomchar__block">
              {detail[0].creators?.map((creator) => (
                <div key={creator.creatorId}>
                  <p className="randomchar__descr">{creator.creatorRole}</p>
                  <button className="button button__main" value={creator.creatorId} onClick={handleClick}>
                    {creator.creatorName}
                  </button>
                </div>
              ))}
           
              {show? null : creators && creators?.map((comic) => (
              <Link className="link_card" to={`/homeComics/DetailComic/${comic.id}`}>
                <img src= {img(comic) } alt= 'Not available' style={{ width: "100px", height: "100px" }}/>
                <h3>{comic.title}</h3>
              </Link>
              ))}
            </div> 
          
      </div>
        
          {/* <p class="bodytext" style={{fontFamily:' Helvetica' , textAlign:'center',color:"white"}}>{detail[0].description}</p> */}  
  </div>  
  </div>
    <Navbar />
    </>
  );
};

export default DetailComic;
