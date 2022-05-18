import React,{useState,useEffect} from 'react';
import RenderComic from '../RenderComic/RenderComic'
import { Link, useParams } from 'react-router-dom';
import'./Lecture.css'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";

import Ultimate from "../../Img/Ultimate.pdf"
import BatmanSpiderman from "../../Img/batman-spiderman.pdf"
import Vengadores from "../../Img/los_vengadores_acoso_nunca_mas.pdf"

import Navbar from '../Navbar/Navbar';
import { getById } from '../../Redux/Actions/actions';




const Lecture =  () => {
    const {comic} = useParams()

    const [comicc,setComicc] = useState("")
    const comicSelected = useSelector((state) => state.ComicsReducer.selectedComic[0]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getById(comic));
        
      }, [dispatch]);
    

    if(comicSelected?.title && comicc===""  ){
       console.log(comicSelected)
        if (comicSelected.title === "Ultimate Spiderman"){ setComicc([Ultimate])
        }else if(comicSelected.title === "Los Vengadores Acoso Nunca Mas"){setComicc([Vengadores ])
        }else if (comicSelected.title === "Batman & Spiderman"){ setComicc([BatmanSpiderman])
        }else setComicc(["Alerta Roja "])
        
    }
    

   
        return (
            <div className='containedLecture'>
                <Navbar/>
                
                    <center className="containedPrimari">
                        <h1>{comicSelected?.title}</h1>
                    <br/>
                    </center>
                <center className="containedSecundari">
                   
                    <RenderComic className="comic" url={comicc[0]} />
                    
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