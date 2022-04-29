import React from 'react'
import  SearchBarComics  from '../../SearchBar/SearchBarComics/SearchBarComics'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import NavBar from '../../Navbar/Navbar.jsx';
import ComicCard from '../../Cards/ComicCard/ComicCard';

import {getAllComics} from '../../../Redux/Actions/actions'
const HomeComics = () => {
    
const allComics = useSelector( state => state.ComicsReducer.copyComics)

const dispatch = useDispatch()

useEffect (()=>{
    dispatch(getAllComics());
}, [dispatch])

return (
<div>
<NavBar />
<SearchBarComics />

{/* state.map((e)=><div> <Card name=${}  </div>) */}

{allComics.length === 0 ? <h1>Loading...</h1> :
     
         allComics.map((comic) =>(
             <div key={comic.id}>
                 
                 <ComicCard
                     id={comic.id}
                     title={comic.title}
                     image={comic.img} />
             </div>)
         )}
         </div>
    )
       
}

export default HomeComics