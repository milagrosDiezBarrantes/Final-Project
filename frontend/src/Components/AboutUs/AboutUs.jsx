import React from "react";
import style from "styled-components";
import image1 from './img/team/01.jpg'
import image2 from './img/team/02.jpg'
import image3 from './img/team/03.jpg'
import styled from "styled-components";
import Code from '../AboutUs/Code';

const AboutUs = () =>{
return (
    <>
    <Code />
   
    <Content>
      <CTA>
        <SignUp target="_blank" href="/AboutUs">
          <h3>More Information </h3>
        </SignUp>
        <Description>
        <h5> Get Primer Access to Raya and the last Dragon for an additional
          fee with a Marvel + Subscription. As of 04/05/2022, the price of
          Marvel + and The Marvel Bundle will increase by $1.</h5>
        </Description>
      </CTA>
      <BackgroundImg />
    </Content>
 

    <div>
    <section className='showcase'>
    <div className='showcase-overlay'>
      <h1>Showcase Travel Agency</h1>
      <p>
        Get to tour the world in style. Select a destination, book your
        flight, and off you go!
      </p>
    </div>
  </section>

    <section className='destinations'>
    <h3>Now available in 46 countries!</h3>
    <div className='grid'>
      <div>
        <img src={image1} alt='destination-1' />
        <h3>Fly to Aruba</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos, ab nesciunt? Molestias rem qui sequi!
        </p>
      </div>

      <div>
        <img src={image2} alt='destination-2' />
        <h3>Experience Mombasa</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos, ab nesciunt? Molestias rem qui sequi!
        </p>
      </div>

      <div>
        <img src={image3} alt='destination-3' />
        <h3>Savour Hawaii</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos, ab nesciunt? Molestias rem qui sequi!
        </p>
      </div>
    </div>
  </section>
  </div>
  </>
  );
}


const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
`;
const BackgroundImg = styled.div`
  background-image: url("../Banner/img/mrv.gif");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: -1;
`;
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
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
const Description = styled.p`
  font-size: 13px;
  font-weight: 1000;
  letter-spacing: 1.3px;
  line-height: 1.5;
  display: inline-block;

  position: relative;
  width: 500px;
  height: 65px;
  background: #;
  overflow: hidden;

  `;
export default AboutUs;

