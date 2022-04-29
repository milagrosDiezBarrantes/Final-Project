import React from 'react'
import NavBar from '../../Navbar/Navbar.jsx';
import  SearchBarComics  from '../../SearchBar/SearchBarComics/SearchBarComics'
import ComicCard from '../../Cards/ComicCard/ComicCard';
const HomeComics = () => {
    
    return (
        <div>
            <h1>HomeComics</h1>
            <NavBar />
            <SearchBarComics />
            <ComicCard />
            {/* state.map((e)=><div> <Card name=${}  </div>) */}
        </div>
    )
}

export default HomeComics