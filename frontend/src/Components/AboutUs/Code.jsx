import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Cod = styled.div`
  z-index:-10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url('https://i.redd.it/78sv3hevebqy.jpg');
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

  handleClick() {
    this.setState(prevState => ({ Buzz: !prevState.Buzz }));
  }

  render() {
    return (
      <Cod>
        <OverlayImage Buzz={this.state.Buzz} />
        <HeadingTop>NOTHING WILL STAND IN OUR WAY</HeadingTop>
      </Cod>
    );
  }
}
export default Code;