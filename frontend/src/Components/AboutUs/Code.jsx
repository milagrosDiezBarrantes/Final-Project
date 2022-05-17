import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import {Link} from "react-router-dom";

const Cod = styled.div`
  z-index:-10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url('https://data.whicdn.com/images/337237172/original.gif');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;

`;

const HeadingTop = styled.h1`
text-align:center;
  font-size: 75px;
  color: #eee;
  margin: 15px;
  font-weight: 100;
  @media (max-width: 850px) {
    font-size: 55px;
  }
  @media (max-width: 650px) {
    font-size: 30px;
  }
`;

const Buzz = keyframes`
0%{left:0;bottom:0;}
25%{left:-10px;bottom:0;}
50%{left:10px;bottom:15px;}
75%{left:0px;bottom:0;}
80%{left:15px;bottom:10px;}
100%{left:0px;bottom:0;}
`;

const OverlayImage = styled.div`
  animation: ${props => (props.Buzz ? `${Buzz} 0.5s ease-in` : "")}
  z-index:10;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.1;
  overflow: hidden;

`;




export class Code extends React.Component {
  constructor(props) {
    super(props);

    this.state = { Buzz: false };
  }

  render() {
    return (
      <Cod>
        <OverlayImage Buzz={this.state.Buzz} />
        <HeadingTop>NADA ES IMPOSIBLE <br></br> HACEMOS QUE LAS COSAS SUCEDAN</HeadingTop>
        <h1>Comunicate con nosotros</h1>
                <h2>marvel.plus@marvel.com<br></br></h2>
                <span className="reserverd-rights">©2022 MARVEL</span>

               <br></br>
                <Link to='/' ><button  className="btn btn-primary btn-block">VOLVER A LA 
                HOME </button></Link>
                 

      </Cod>
    );
  }
}
export default Code;


const LogIn = styled.a`
  border: 2px solid #f9f9f9;
  border-radius: 7px;
  margin: 0 20px;
  padding: 7px 15px;
  letter-spacing: 1.2px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
  }
`;