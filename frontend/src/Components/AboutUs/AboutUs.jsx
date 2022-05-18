import React from "react";
import style from "styled-components";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import styled from "styled-components";
import Code from '../AboutUs/Code';
import mili from './img/team/WhatsApp Image 2022-05-18 at 12.51.25.jpeg';
import meli from './img/team/WhatsApp Image 2022-05-16 at 20.09.00.jpeg';
import lu from  './img/team/WhatsApp Image 2022-05-17 at 13.51.18.jpeg';
import Joel from './img/team/WhatsApp Image 2022-05-18 at 12.38.16.jpeg'
import Ale from './img/team/WhatsApp Image 2022-05-18 at 12.52.05.jpeg'
const AboutUs = () =>{
return (
    <Sec>
      <Co>
       <h1><br></br></h1>
            <div class="contenedor">
              <h1>NUESTRO EQUIPO </h1>
                <SobreNosotros>Sobre nosotros</SobreNosotros>
                <h2 class="slogan">Creamos aplicaciones altamente funcionales - 100% adaptadas a tus necesidades</h2>
                <h3>Trabajamos utlizando las últimas tecnologías para mantener a nuestros clientes a la vanguardia, proveyendo el mejor servicio asgurando que estarán absoletos en un corto plazo</h3>
                <p class="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dicta rem hic totam necessitatibus
                    tempora animi error perferendis. Vero corrupti porro quia! Ad saepe alias, officiis voluptatem sed, odio
                    dolores neque dolorem placeat nam quia numquam soluta ipsam nostrum consequuntur, a magnam non. Tenetur
                    repudiandae distinctio inventore voluptate fugit laborum?</p>
                
            </div>
            <div className="name">
              <h3>
                Alexis , Melisa , Joel , Luciana  y Milagros  
              </h3>
              <h1>NUESTRO EQUIPO COMPUESTO POR 5 INTEGRANTES </h1> 
             </div>
        </Co>
      <Seccion>
            <Cot>
                <Wrap>
                <h1>Melisa</h1>
                    <img src={meli} alt="viewer"/>
                    <video autoPlay={true} playsInline={true} loop={true}>
                      <source src="/videos/1564676296-national-geographic.mp4"></source>
                    </video>
                    <p>Melisa Ferreira</p>
                </Wrap>
                <Wrap>
                <img src={Joel} alt="viewer"/>
                    <video autoPlay={true} playsInline={true} loop={true}>
                      <source></source>
                    </video>
                </Wrap>
                <Wrap>
                    <img src={lu} alt="viewer"/>
                    <video autoPlay={true} playsInline={true} loop={true}>
                      <source src="/videos/1564676296-national-geographic.mp4"></source>
                    </video>
                </Wrap>
                <Wrap>
                    <img src={Ale} alt="viewer"/>
                    <video autoPlay={true} playsInline={true} loop={true}>
                      <source src="/videos/1564676296-national-geographic.mp4"></source>
                    </video>
                </Wrap>
                <Wrap>
                    <img src={mili} alt="viewer"/>
                    <video autoPlay={true} playsInline={true} loop={true}>
                      <source src="/videos/1564676296-national-geographic.mp4"></source>
                    </video>
                </Wrap>  
            </Cot> 
        <Code /> 
      </Seccion>   
      </Sec>
      
  );
}


const SignUp = styled.a`
  width: 100%;
  padding: 12px 0;
  letter-spacing: 1.3px;
  font-size: 1.15rem;
  cursor: pointer;
  border: none;
  background-color: #0063e5;
  color: #f9f9f9;
  font-weight: bold;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const  Sec = styled.div`
top: 0px;
background-color: #000000;

}`;

const Co = styled.div`
width: 100%;
max-width:1650px;
margin: auto;
overflow: hidden;
background-color: #000000;
}`;
const Parrafo = styled.div`
    margin-bottom: 13px;
    font-weight: 300;
    text-align: justify;
    line-height: 24px;
    color: #fffff;
}`;

const SobreNosotros = styled.div`
width: 100%;
max-width:1650px;
margin: auto;
overflow: hidden;
}`;

const Seccion = styled.div`
width: 100%;
max-width:1650px;
margin: auto;
overflow: hidden;
}`;


const Cot = styled.div`
margin-top: 30px;
padding: 30px 0 26px;
display: grid;
grid-gap: 20px;
background-color: #000000;
grid-template-columns: repeat(5, minmax(0, 1fr));
@media screen and (max-width: max-width:1650px;
  ){
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
`;

const Wrap = styled.div`
border-radius: 10px;
cursor: pointer;
overflow: hidden;
position: relative;
padding-top: 56%;
border: 3px solid rgba(249, 249, 249, .3);
transition: all .3s ease-in-out;

img{
  inset: 0px;
  display: block;
  height: 100%;
  width: 100%;
  opacity: 1;
  position: absolute;
  object-fit: cover;
  z-index: 1;
  name: Mili
  transition: all .3s ease-in-out;
}


&:hover{
  transform: scale(1.05);
  background-color: #000000;

}
`;
export default AboutUs;

