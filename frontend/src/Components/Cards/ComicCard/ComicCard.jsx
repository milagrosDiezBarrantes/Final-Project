import React from 'react';
import { Link } from 'react-router-dom';

import s from './ComicCard.module.css';
export default function ComicCard({ image, title, id }) {

    return (
        <Link className='link_card' to={`/homeComics/DetailComic/${id}`}>
            <div className={s.container_card}>
                <div className={s.img_card_container}>
                    <img className={s.img_card} src={image} alt={title} />
                </div>
                <div className={s.detail_card_container}></div>
                    <h2 className={s.detail_card_container}>{title}</h2>
                    <div>
</div>
                </div>
        </Link>

    );
}