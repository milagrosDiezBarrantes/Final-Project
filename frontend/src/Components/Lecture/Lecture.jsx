import React,{useState,useEffect} from 'react';
import RenderComic from '../RenderComic/RenderComic'
import { Link, useParams } from 'react-router-dom';
import'./Lecture.css'
import axios from 'axios';

import Ultimate from "../../Img/Ultimate.pdf"
import BatmanSpiderman from "../../Img/batman-spiderman.pdf"
import Vengadores from "../../Img/los_vengadores_acoso_nunca_mas.pdf"

import Navbar from '../Navbar/Navbar';



const Lecture =  () => {
    const {comic} = useParams()
    const [info, setInfo] = useState({})
    const [comicc,setComicc] = useState(["Alerta Roja "])

    useEffect(()=>{
        setInfo(data())
        handle()
    },[comic])
    const handle = ()=>{
        setComicc(["Alerta Roja "])
        if (info.title === "Ultimate Spiderman") setComicc([Ultimate])
        if (info.title === "Los Vengadores Acoso Nunca Mas") setComicc([Vengadores ])
        if (info.title === "Batman & Spiderman") setComicc([BatmanSpiderman])
        console.log( "INFO",info)
    }
    const data= async()=>{
        const a = await axios.get(`http://localhost:3001/comics/render/${comic}`) //url, nombre,paginas
        console.log("A",a)
        return a
    }

   
        return (
            <div className='containedLecture'>
                <Navbar/>
                
                    <center className="containedPrimari">
                        <h1>{info.title}</h1>
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
                    <RenderComic className="comic" url={comicc[0]} />
                    <div className='Publiciti'>Publicidad</div>
                </center>
            </div>
        )
}

export default Lecture;

/* const UltimateSpiderman = Comics.findOrCreate({where:{
    id:01010101,
    title:"Ultimate Spiderman",
    img:"https://2.bp.blogspot.com/vEjA_hhJuxt1mlpg-tMN7vzNz7xeWqdv8OKCJlPy5BofEyjMRajqtbqtADDaQpOcrw7TOfCqJmJaeRxz-b5HQRzKCBdjwQnhcQk-hHp_22wts0LgmX7CYtf1hxaa_rTQzyJ83466lw=s0",
    pages:54,
    description:"The Spiderman In Action"
    
  }})
  const LosVengadoresAcosoNuncaMas = Comics.findOrCreate({where:{
    id:012012012012,
    title:"Los Vengadores Acoso Nunca Mas",
    img:"https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/eb92952db8a4f7c44fbee7d4abf960b6/thumb_1200_1719.png",
    pages:54,
    description:"The Avengers Adventures"
    
  }})
  const BatmanSpiderman = Comics.findOrCreate({where:{
    id:013013013013,
    title:"Batman & Spiderman",
    img:"https://online.anyflip.com/zyvcm/hgvz/files/mobile/1.jpg?1606828234",
    pages:54,
    description:"The CrosOver whit Batman and Spiderman"
    
  }}) */