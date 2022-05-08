import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBarComics from "../../SearchBar/SearchBarComics/SearchBarComics";
import NavBar from "../../Navbar/Navbar.jsx";
import ComicCard from "../../Cards/ComicCard/ComicCard";
import { getAllComics } from "../../../Redux/Actions/actions";
import CustomPagination from "../../Pagination/Pagination.jsx";
import AppBanner from "../../Publicidad/Publicidad";
import "../../Publicidad/Publicidad";

import avengers from "../../Publicidad/imag/Avengers_logo.png";
import avengersLogo from "../../Publicidad/imag/Avengers.png";

const HomeComics = () => {
  const dispatch = useDispatch();
  const allComics = useSelector((state) => state.ComicsReducer.copyComics);
  const [page, setPage] = useState(1);
  const [numOfPages] = useState(10);
  const [, setData] = useState([]);
  const [copyComics, setCopyComics] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const PER_PAGE = 12;
  const start = (page - 1) * 12;
  const end = page * PER_PAGE;
  useEffect(() => {
    dispatch(getAllComics());
    setPage(1);
  }, [dispatch]);

  useEffect(() => {
    setData(allComics);
    setCopyComics(allComics);
  }, [allComics]);
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
          currentPage.map(({ id, title, img }) => {
            return <ComicCard id={id} title={title} image={img} />;
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
      <div className="app__banner">
        <img src={avengers} alt="Avengers" />
        <div className="app__banner-text">
          ¡Todo lo que buscas
          <br />
          en un solo lugar!
        </div>
        <img src={avengersLogo} alt="Avengers logo" />
      </div>
    </div>
  );
};
export default HomeComics;
