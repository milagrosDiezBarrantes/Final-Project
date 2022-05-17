import React,{useState,useEffect} from 'react';
import RenderComic from '../RenderComic/RenderComic'
import { Link, useParams } from 'react-router-dom';
import'./Lecture.css'
import axios from 'axios';

import Navbar from '../Navbar/Navbar';


const Lecture =  () => {
    const {comic} = useParams
    const [info, setInfo] = useState({})
    useEffect(()=>{
        setInfo(data())
    },[comic])
    
    
    const data= async()=>{
        const a = await axios.get(`/comics/render/${comic}`) //url, nombre,paginas
        return a
    }

   
        return (
            <div className='containedLecture'>
                <Navbar/>
                
                    <center className="containedPrimari">
                        <h1>{info.name}</h1>
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
                    <RenderComic className="comic" comic={info.url} pages={info.pages}/>
                    <div className='Publiciti'>Publicidad</div>
                </center>
            </div>
        )
}

export default Lecture;