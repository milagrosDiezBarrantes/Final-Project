import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBarComics from "../../SearchBar/SearchBarComics/SearchBarComics";
import NavBar from "../../Navbar/Navbar.jsx";
import ComicCard from "../../Cards/ComicCard/ComicCard";
import { getAllComics } from "../../../Redux/Actions/actions";
import CustomPagination from "../../Pagination/Pagination.jsx";
// import AppBanner from "../../Publicidad/Publicidad";
import "../../Publicidad/Publicidad";
import Footer from "../Footer/Footer";

import avengers from "../../Publicidad/imag/Avengers_logo.png";
import avengersLogo from "../../Publicidad/imag/Avengers.png";
import { useNavigate } from "react-router";

const HomeComics = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allComics = useSelector((state) => state.ComicsReducer.copyComics);
  const userLogin = useSelector((state) => state.ComicsReducer.loginUser);
  const noRegister = 'password y/o userName incorrecto/s'

  console.log('USERLOGIN',userLogin)
  const [page, setPage] = useState(1);
  const [numOfPages] = useState(10);
  const [, setData] = useState([]);
  const [copyComics, setCopyComics] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const PER_PAGE = 15;
  const start = (page - 1) * PER_PAGE;
  const end = page * PER_PAGE;
  useEffect(() => {
    if(userLogin === noRegister || userLogin === undefined) {
      navigate('/formLoginUser')
    }
    console.log(userLogin)
    dispatch(getAllComics());
    setPage(1);
  }, [dispatch, navigate, userLogin]);


  useEffect(() => {
    if(userLogin === noRegister || userLogin === undefined) {
      navigate('/formLoginUser')
    }
    console.log(userLogin)
    setData(allComics);
    setCopyComics(allComics);
  }, [navigate, userLogin, allComics]);
  useEffect(() => {
    window.scroll(0, 0);

    setCurrentPage(copyComics.slice(start, end));
    // eslint-disable-next-line
  }, [page, copyComics]);
  return (
    <div className="MaxContained">
      <NavBar />
      {/* <div  className='Paginado'>
            {numOfPages > 1 && (
              <CustomPagination setPage={setPage} numOfPages={numOfPages} />
             )}
        </div> */}
      <SearchBarComics />
      <div className="grid">
        {currentPage &&
          currentPage.map(({ id, title,  idPrincipal, img }) => {
            return <ComicCard key={id} id={id} idPrincipal={idPrincipal} title={title} image={img} />;
          })}
      </div>
      <br />
      <br />
      <br />

      <div>
        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )}
      </div>
      <br/>
      <div className="app__banner">
        <img src={avengers} alt="Avengers" />
        <div className="app__banner-text">
          ¡Todo lo que buscas
          <br />
          en un solo lugar!
        </div>
        <img src={avengersLogo} alt="Avengers logo" />
      </div>
      <Footer />
    </div>
  );
};
export default HomeComics;
