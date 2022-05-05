import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCharacters } from '../../../Redux/Actions/actions';
import NavBar from '../../Navbar/Navbar.jsx';
import CharacterCard from "../../Cards/CharacterCard/CharacterCard"
import CustomPagination from '../../Pagination/Pagination.jsx'
import AppBanner from "../../Publicidad/Publicidad";

import "./HomeCharacter.css"

const HomeCharacter = () => {
    const dispatch = useDispatch()
    const Characters = useSelector(state => state.CharactersReducer.copyCharacters)
    const [numOfPages] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    
    //Traer datos
    useEffect(() => {
        dispatch(getAllCharacters())
    }, [dispatch])

    useEffect(() => {
        setData(Characters)
    }, [Characters])

    const handlePageClick = ({ selected: selectedPage }) => {
        // console.log('selectedPage', selectedPage);
        setCurrentPage(selectedPage);
    }
    const offset = currentPage * numOfPages;
console.log(data)
    const currentPageData = data ?
        data.slice(offset, offset + numOfPages)
            .map(e => {
                return (
                    <CharacterCard
                        key={e.id}
                        id={e.id}
                        title={e.name}
                        image={e.profilePic}
                        description={e.description}
                    />
                )

            })
        : <p>No hay nada </p>

    //===========Rellenar estado interno===============//

    const pageCount = Math.ceil(data.length / numOfPages);

    return (
        <div className='MaxContained'>
            <AppBanner/>
            <div>
                <NavBar />
                <div className='Paginado'>
                    <CustomPagination setPage = {setCurrentPage} numOfPages={numOfPages}/>
                </div>
                <div>
                    {currentPageData}
                </div>
                <div className='Paginado'>
                    <CustomPagination setPage = {setCurrentPage} numOfPages={numOfPages}/>
                </div>
               
            </div>
        </div>
    )
}

export default HomeCharacter