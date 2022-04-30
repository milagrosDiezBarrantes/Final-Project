import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from "react-paginate"
import { getAllCharacters } from '../../../Redux/Actions/actions';

import NavBar from '../../Navbar/Navbar.jsx';


import { Button, Container, Input, Paper, Box, Grid } from "@mui/material"

const HomeCharacter = () => {
    const dispatch = useDispatch()
    const Characters = useSelector(state => state.CharactersReducer.copyCharacters)

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


    const handlePageClick = ({ selected: selectedPage }) => {
        // console.log('selectedPage', selectedPage);
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_PAGE;

    const currentPageData = data ?
        data.slice(offset, offset + PER_PAGE)
            .map(e => {
                return (
                    <Grid>
                        <div key={e.id} >
                            <img
                                key={e.id}
                                src={e.profilePic}
                                alt={e.name}
                            />
                            <h1>{e.name}</h1>
                            <p>{e.description}</p>

                        </div>
                    </Grid>
                )

            })
        : <p>No hay nada </p>

    //===========Rellenar estado interno===============//



    const pageCount = Math.ceil(data.length / PER_PAGE);


    return (
        <Container
            fixed

        >
            {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}

            <div>

                <NavBar />
                <div >
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
                <div >
                    {currentPageData}
                </div>


            </div>
        </Container>
    )
}

export default HomeCharacter