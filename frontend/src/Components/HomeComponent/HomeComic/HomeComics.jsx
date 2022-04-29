import React from 'react'
import { SearchBarComics } from '../../SearchBar/SearchBarComics/SearchBarComics'
import { NavLink } from 'react-router-dom'

import NavBar from '../../Navbar/Navbar.jsx';
import ComicCard from '../../Cards/ComicCard/ComicCard';
const HomeComics = () => {
    
    return (
        <div>
            <h1>HomeComics</h1>
            <NavBar />
            <SearchBarComics />
            <NavLink to='/homeComics/DetailComic/84422'>DetailComic</NavLink>
            <ComicCard />
            {/* state.map((e)=><div> <Card name=${}  </div>) */}
        </div>
    )
}

export default HomeComics