import React from 'react'
import NavBar from '../../Navbar/Navbar.jsx';
import SearchBarComics from '../../SearchBar/SearchBarComics/SearchBarComics'

const HomeComics = () => {

    return (
        <div>
            <h1>HomeComics</h1>
            <NavBar />
            <SearchBarComics />

            {/* state.map((e)=><div> <Card name=${}  </div>) */}
        </div>
    )
}

export default HomeComics