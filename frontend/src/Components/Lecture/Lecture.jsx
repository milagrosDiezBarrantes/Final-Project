import React,{useState} from 'react';
import RenderComic from '../RenderComic/RenderComic'
import { Link } from 'react-router-dom';
import'./Lecture.css'


import Navbar from '../Navbar/Navbar';

import ByS from '../../Img/batman-spiderman.pdf'
import LosV from '../../Img/los_vengadores_acoso_nunca_mas.pdf'
import u from '../../Img/Ultimate.pdf'

const Lecture =  () => {

    const [comics] = useState([ByS,LosV,u]) 
    const [i,seti] = useState(0)
    const cambioComicMas = ()=>{
        if(i===comics.length-1){
            seti(0)
        }else{seti(i+1)}
    }
    const cambioComicMen = ()=>{
        if(i===0){
            seti(comics.length-1)
        }else{seti(i-1)}
    }
        return (
            <div className='containedLecture'>
                <Navbar/>
                <button onClick={cambioComicMas}>+</button>
                <button onClick={cambioComicMen}>-</button>
                <center className="containedPrimari">
                    <h1>ComicName</h1>
                    <br/>
                     <Link to= '/homeComics'>  
                        <button className='btn'>HomeComics</button>
                     </Link> 
                    <Link to='/homeCharacter'>
                    
                        <button className='btn'>HomeCharacters</button>
                    </Link>
                </center>
                <center className="containedSecundari">
                <div className='Publiciti'>Publicidad</div>
                <RenderComic className="comic" comic={comics[i]}/>
                <div className='Publiciti'>Publicidad</div>
                </center>
            </div>
        )
}

export default Lecture;