import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import cinco from "../Home/img/cinco.jpg";
import cuatro from "../Home/img/cuatro.jpg";
import tres from "../Home/img/tres.jpg";
import dos from "../Home/img/dos.jpg";
import uno from "../Home/img/uno.jpg";



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
          <a>
            <img img className="uno" src={uno} alt="slider"/>
          </a>
      </Wrap>
      <Wrap>
          <a>
            <img  img className="dos" src={dos} alt="slider"/>
          </a>
      </Wrap>
      <Wrap>
          <a>
            <img  img className="tres" src={tres} alt="slider"/>
          </a>
      </Wrap>
      <Wrap>
          <a>
            <img  img className="cuatro" src={cuatro} alt="slider"/>
          </a>
      </Wrap>
      <Wrap>
          <a>
            <img  img className="cinco" src={cinco} alt="slider"/>
          </a>
      </Wrap>
    </Carousel>
  )
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button{
    opacity: 0;
    transition: opacity .2s;

    &:hover{
      opacity: 1;
    }
  }

  ul li button{
    &::before{
      font-size: 1rem;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before{
    color: white;
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