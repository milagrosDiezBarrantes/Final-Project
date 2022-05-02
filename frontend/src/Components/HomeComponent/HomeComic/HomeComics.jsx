import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SearchBarComics from '../../SearchBar/SearchBarComics/SearchBarComics'
import ReactPaginate from "react-paginate"
import NavBar from '../../Navbar/Navbar.jsx';
import ComicCard from '../../Cards/ComicCard/ComicCard';
import axios from 'axios'
import { getAllComics } from '../../../Redux/Actions/actions'
import CustomPagination from '../../Pagination/Pagination.jsx'
import s from './HomeComics.module.css'

const HomeComics = () => {

    const dispatch = useDispatch()
    const allComics = useSelector(state => state.ComicsReducer.copyComics)

    const [page, setPage] = useState(1);
    
    const [numOfPages, setNumOfPages] = useState(10);
    const [data, setData] = useState([]);
    const [copyComics, setCopyComics] = useState([]);
    const [currentPage, setCurrentPage] = useState();
    const PER_PAGE=12;
    const start = (page-1)*12;
  const end = page * PER_PAGE;


    useEffect(() => {
        dispatch(getAllComics());
        setPage(1);
    }, [dispatch])
    
    useEffect(() => {
    setData(allComics)
    setCopyComics(allComics);
    }, [allComics])


  useEffect(() => {
    window.scroll(0, 0);
    
    setCurrentPage(copyComics.slice(start, end));    
    // eslint-disable-next-line
  }, [ page, copyComics])

  
//   const [page, setPage] = useState(1);
//     
//     const max = copyPokemons.length / perPage;
//     const pokemonsPerPage = Math.ceil(max)
    // Traer datos
    // const handlePageClick = ({ selected: selectedPage }) => {
    //     setCurrentPage(selectedPage)
    // }
    // const offset = currentPage * PER_PAGE;
    // //Aquí mapeamos los datos del paginado
    // const pageCount = Math.ceil(data.length / PER_PAGE);

    return (
        <div>

        <NavBar/>
        <br/>
        <br/>
        <br/>

        <div>
            {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
    
    <SearchBarComics/>

                  

        {currentPage &&        
    currentPage.map(({ id, title, img }) => {
                return (
                    <div key={id}>
                        <ComicCard
                            id={id}
                            title={title}
                            image={img}
                        />

                    </div>
                )

            })
        }

                {/* <ReactPaginate
            <div id='container'>
                    previousLabel={'<- Previous'}
                    nextLabel={'Next ->'}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                // containerClassName={'pagination'}
                // previousLinkClassName={'pagination_link'}
                // nextLinkClassName={'pagination_link'}
                // disabledClassName={'pagination_link--disabled'}
                // activeClassName={'pagination_link--active'}
                />
            </div> */}

            {/* state.map((e)=><div> <Card name=${}  </div>) */}

            {/* {allComics.length === 0 ? <h1>Loading...</h1> :

                allComics.map((comic) => (
                    <div key={comic.id}>

                        <ComicCard
                            id={comic.id}
                            title={comic.title}
                            image={comic.img} />
                    </div>)
                )} */}
            {/* <div className={s.gridImg}>
                {currentPageData}
            </div> */}
<div>
            {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>

        </div>
    )

}

export default HomeComics