import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import cinco from "./img/cinco.jpg";
import cuatro from "./img/cuatro.jpg";
import tres from "./img/tres.jpg";
import dos from "./img/dos.jpg";
import uno from "./img/uno.jpg";



const ImgSlider = ()=>{

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <Carousel {...settings}>
      <Wrap>
            <img img className="uno" src={uno} alt="slider"/>
      </Wrap>
      <Wrap>
            <img  img className="dos" src={dos} alt="slider"/>
      </Wrap>
      <Wrap>
            <img  img className="tres" src={tres} alt="slider"/>
      </Wrap>
      <Wrap>
            <img  img className="cuatro" src={cuatro} alt="slider"/>
      </Wrap>
      <Wrap>
            <img  img className="cinco" src={cinco} alt="slider"/>
      </Wrap>
    </Carousel>
  )
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button{
    opacity: 0;
    transition: opacity .2s;
    color: rgb(134, 4, 4);

    &:hover{
      opacity: 1;
    }
  }

  ul li button{
    &::before{
      font-size: 1rem;
      color: rgb(134, 4, 4);
    }
  }

  li.slick-active button::before{
    color: white;
    color: rgb(134, 4, 4);

  }

  .slick-list{
    /* overflow: initial; */
  }
`;

const Wrap = styled.div`
  border-radius: 5px;
  cursor: pointer;
  position: relative;

  a{
    border-radius: 5px;
    display: block;
    position: relative;
    padding: 4px;

    img{
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }

    &:hover{
      padding: 0;
      border: 3px solid rgba(249, 249, 249, .8);
      transition-duration: 200ms;
    }
  }
`;

export default ImgSlider;