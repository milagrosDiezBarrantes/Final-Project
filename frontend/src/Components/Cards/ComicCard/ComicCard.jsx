import React from 'react';
import { Link } from 'react-router-dom';
import './ComicCard.css'

export default function  ComicCard({img, name, type, id}) {
  let key = 1;
    return (
     <Link className='link_card' to={`/Home/${id}`}>
        <div className='container_card'>                
            <div className='img_card_container'>
                <img className='img_card' src={img} alt="not found"/>
            </div> 
            <div className='detail_card_container'>
                <h2 className='name_comic_card'>{name}</h2> 
                    {type.map((type)=>(
                        <p className='card_par' key= {++key}>{type}</p>
                    ))}
            </div>     
        </div>
      </Link>

  );
}