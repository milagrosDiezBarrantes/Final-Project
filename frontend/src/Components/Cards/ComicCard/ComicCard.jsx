import React from 'react';
import { Link } from 'react-router-dom';
import './ComicCard.css'

export default function  ComicCard({image, title, id}) {
  
    return (
     <Link className='link_card' to={`/homeComics/DetailComic/${id}`}>
        <div className='container_card'>                
            <div className='img_card_container'>
                <img className='img_card' src={image} alt="not found"/>
            </div> 
            <div className='detail_card_container'>
                <h2 className='name_comic_card'>{title}</h2> 
                    
            </div>     
        </div>
      </Link>

  );
}