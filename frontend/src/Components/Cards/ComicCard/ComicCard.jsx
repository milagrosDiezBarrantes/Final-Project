import React from 'react';
import { Link } from 'react-router-dom';

export default function ComicCard({ image, title, id }) {

    return (
        <Link to={`/homeComics/DetailComic/${id}`}>
            <div >
                <div >
                    <img src={image} alt="not found" />
                </div>
                <div >
                    <h2 >{title}</h2>

                </div>
            </div>
        </Link>

    );
}