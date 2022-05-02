import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SearchBarComics from '../../SearchBar/SearchBarComics/SearchBarComics'
import ReactPaginate from "react-paginate"
import NavBar from '../../Navbar/Navbar.jsx';
import ComicCard from '../../Cards/ComicCard/ComicCard';

import { getAllComics } from '../../../Redux/Actions/actions'
import s from './HomeComics.module.css'

const HomeComics = () => {

    const dispatch = useDispatch()
    const allComics = useSelector(state => state.ComicsReducer.copyComics)

    //===========Paginado===============//


    const PER_PAGE = 12;

    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);

    //Traer datos
    useEffect(() => {
        dispatch(getAllComics());
    }, [dispatch])

    useEffect(() => {
        setData(allComics)
    }, [allComics])

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;

    //Aquí mapeamos los datos del paginado
    const currentPageData = data ?
        data.slice(offset, offset + PER_PAGE)
            .map(({ id, title, img }) => {
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
        : <p>No hay nada </p>

    const pageCount = Math.ceil(data.length / PER_PAGE);

    return (
        <div>
            <NavBar />
            <SearchBarComics />
            <div id='container'>
                <ReactPaginate
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
            </div>

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
            <div className={s.gridImg}>
                {currentPageData}
            </div>


        </div>
    )

}

export default HomeComics