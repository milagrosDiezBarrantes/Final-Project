import React from 'react';
import styled from 'styled-components';
import marvel from './img/viewers-marvel.png';
//import marvelVideo from "../Home/img/1564676115-marvel.mp4";

const Viewer = () =>{
  return (
    <> 
    
     <Container>
       <Wrap>
       <img src="https://c.tenor.com/y63lhTUEIOsAAAAC/captain-marvel.gif" alt="viewer"/>
           <video autoPlay={true} playsInline={true} loop={true}>
             <source></source>
           </video>
       </Wrap>
       <Wrap>
           <img src="https://img.wattpad.com/3b6725e0f98e9659bbbc54cff7e876c894bd1045/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7a66673272784a446468322d42513d3d2d313030343335373938322e313635613931313364613362383734373438363936323734343236352e676966" alt="viewer"/>
           <video autoPlay={true} playsInline={true} loop={true}>
             <source src="/videos/1564676296-national-geographic.mp4"></source>
           </video>
       </Wrap>
       <Wrap>
           <img src="https://i.pinimg.com/originals/b4/55/54/b455540b13eb57ba3f09d9ebcd93b187.gif" alt="viewer"/>
           <video autoPlay={true} playsInline={true} loop={true}>
             <source src="/videos/1564676296-national-geographic.mp4"></source>
           </video>
       </Wrap>
       <Wrap>
           <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c069b806-a231-4655-990d-1cc4375444e8/d5cnxwi-4b34b903-3f8b-43de-b290-2169408ffc64.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MwNjliODA2LWEyMzEtNDY1NS05OTBkLTFjYzQzNzU0NDRlOFwvZDVjbnh3aS00YjM0YjkwMy0zZjhiLTQzZGUtYjI5MC0yMTY5NDA4ZmZjNjQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4avrDj7Ngah3Dj-_RbPHXfbjbJ1fr3gPFQW8H6ObvYA" alt="viewer"/>
           <video autoPlay={true} playsInline={true} loop={true}>
             <source src="/videos/1564676296-national-geographic.mp4"></source>
           </video>
       </Wrap>
       <Wrap>
           <img src="https://pa1.narvii.com/6178/4b8142c9a313f11401f249b7987add196cefcb3c_hq.gif" alt="viewer"/>
           <video autoPlay={true} playsInline={true} loop={true}>
             <source src="/videos/1564676296-national-geographic.mp4"></source>
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
  background-color: #000;
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