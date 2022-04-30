import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Slider = () => {

    const dispatch = useDispatch()
    const [comics, setComics] = useState([])

    useEffect(() => {

        const loadImages = async () => {
            let img = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=17117ab9c18276d48d8634390c025df4&language=en-US&include_adult=false&page=${this.random}`);
            let OnlyImgs = img.data.results
            setComics(OnlyImgs)
        }

        loadImages()
    }, [])

    return (
        <div>

        </div>
    )
}

export default Slider