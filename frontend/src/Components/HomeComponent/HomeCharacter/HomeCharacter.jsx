import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from "react-paginate"
import { getAllCharacters } from '../../../Redux/Actions/actions';
import "./HomeCharacter.css"

const HomeCharacter = () => {
    const dispatch = useDispatch()
    const Characters = useSelector(state => state.CharactersReducer.copyCharacters)

    // console.log(Characters)
    //===========Paginado===============//


    const PER_PAGE = 8;

    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);

    //Traer datos
    useEffect(() => {
        dispatch(getAllCharacters())
    }, [dispatch])

    useEffect(() => {
        setData(Characters)
    }, [Characters])

    console.log(data)


    function handlePageClick({ selected: selectedPage }) {
        // console.log('selectedPage', selectedPage);
        setCurrentPage(selectedPage);
    }
    const offset = currentPage * PER_PAGE;

    const currentPageData = data ?
        data.slice(offset, offset + PER_PAGE)
            .map(e => {
                return (
                    <div key={e.id} className='card'>
                        <img
                            className='box_img'
                            key={e.id}
                            src={e.profilePic}
                            alt={e.name}
                        />
                        <h1>{e.name}</h1>
                        <p>{e.description}</p>

                    </div>
                )

            })
        : <p>No hay nada </p>

    //===========Rellenar estado interno===============//



    const pageCount = Math.ceil(data.length / PER_PAGE);


    return (
        <div className='container'>

            <h1>Heroes</h1>
            <div className='all_games'>
                {currentPageData}
            </div>
            <div className='paginas'>
                <ReactPaginate
                    previousLabel={'<- Previous'}
                    nextLabel={'Next ->'}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    previousLinkClassName={'pagination_link'}
                    nextLinkClassName={'pagination_link'}
                    disabledClassName={'pagination_link--disabled'}
                    activeClassName={'pagination_link--active'}
                />
            </div>

        </div>
    )
}

export default HomeCharacter