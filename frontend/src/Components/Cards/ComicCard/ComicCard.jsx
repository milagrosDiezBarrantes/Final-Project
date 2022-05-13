import React from 'react';
import { Link } from 'react-router-dom';
import './ComicCard.css';
export default function ComicCard({ image, title, id ,idPrincipal}) {
if(id===null){
    id= idPrincipal
}
    return (
        <Link className='link_card' to={`/homeComics/DetailComic/${id}`}>
           <div className='container_card'>
                <div className='img_card_container'>
                <img className='img_card' src={image} alt={title} />
                </div>
                <div className='detail_card_container'>
                   <p className='name_comic_card'>{title}</p>
                </div>
            </div>
        </Link>

    );
}
