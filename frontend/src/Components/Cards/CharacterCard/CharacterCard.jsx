import React from 'react';
import { Link } from 'react-router-dom';

import "./CharacterCard.css"

export default function ComicCard({ image, title, id, description }) {
    const chamuyo = "Un Gran Heroe"
    return (
        <Link className='link_card' to={`/homeCharacter/DetailCharacter/${id}`}>
            <div className="container_card">
                <div className="img_card_container">
                    <img className="img_card" src={image} alt={title} />
                </div>
                <div className="detail_card_container"></div>
                    <h2 className="detail_card_container">{title}</h2>
                    <h4 className='CharacterDescription'>{description===""?chamuyo:description}</h4>
                    <div>
</div>
                </div>
        </Link>

    );
}