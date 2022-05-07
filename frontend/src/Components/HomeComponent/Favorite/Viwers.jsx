import React from 'react';
import styled from 'styled-components';
import marvel from './img/viewers-marvel.png';
//import marvelVideo from "../Home/img/1564676115-marvel.mp4";

const Viewer = () =>{
  return (
    <> 
     <h4> YOUR FAVORITE</h4>
     <Container>
       <Wrap>
           <img src="/images/viewers-disney.png" alt="viewer"/>
           <video autoPlay={true} playsInline={true} loop={true}>
             <source src="/videos/1564674844-disney.mp4"></source>
           </video>
       </Wrap>
       <Wrap>
           <img className="uno" src={marvel} alt="viewer"/>
           <video autoPlay={true} playsInline={true} loop={true}>
             <source></source>
           </video>
       </Wrap>
       <Wrap>
           <img src="/images/viewers-national.png" alt="viewer"/>
           <video autoPlay={true} playsInline={true} loop={true}>
             <source src="/videos/1564676296-national-geographic.mp4"></source>
           </video>
       </Wrap>
       <Wrap>
           <img src="/images/viewers-pixar.png" alt="viewer"/>
           <video autoPlay={true} playsInline={true} loop={true}>
             <source src="/videos/1564676714-pixar.mp4"></source>
           </video>
       </Wrap>
       <Wrap>
           <img src="/images/viewers-starwars.png" alt="viewer"/>
           <video autoPlay={true} playsInline={true} loop={true}>
             <source src="/videos/1608229455-star-wars.mp4"></source>
           </video>
       </Wrap>
     </Container>
     </>
  )
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, minmax(0, 1fr));


  @media screen and (max-width: 768px){
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
    transition: all .3s ease-in-out;
  }

  video{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    z-index: 0;
    opacity: 0;
  }

  &:hover{
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, .8);

    video{
      opacity: 1;
    }
  }
`;

export default Viewer;