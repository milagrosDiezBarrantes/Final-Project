import React from 'react'
import { SearchBarComics } from '../../SearchBar/SearchBarComics/SearchBarComics'

const HomeComics = () => {
    return (
        <div>
            <h1>HomeComics</h1>
            <SearchBarComics />
            {/* state.map((e)=><div> <Card name=${}  </div>) */}
        </div>
    )
}

export default HomeComics