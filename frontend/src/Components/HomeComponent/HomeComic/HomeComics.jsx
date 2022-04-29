import React from 'react'
import { SearchBarComics } from '../../SearchBar/SearchBarComics/SearchBarComics'
import { NavLink } from 'react-router-dom'

const HomeComics = () => {

    
    return (
        <div>
            <h1>HomeComics</h1>
            <SearchBarComics />
            <NavLink to='/homeComics/DetailComic/84422'>DetailComic</NavLink>
        </div>
    )
}

export default HomeComics