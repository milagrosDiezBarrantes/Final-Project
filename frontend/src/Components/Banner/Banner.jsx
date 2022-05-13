import React from "react";
import styled from "styled-components";
import logo from "../Banner/img/marvel.jpg";
import HeaderBanner from "../Banner/Header/Header";
import CheckoutBut from "../PayPal/PayPal";
import { useAuth0 } from "@auth0/auth0-react";
// import FloatingActionButtons from "../../Components/Admin/Admin";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { authenticateUser } from "../../Redux/Actions/actions";
import { makeStyles } from '@material-ui/core/styles';
import Landing from './Accordion/Accordion';
import Viewer from '../../../src/Components/HomeComponent/Favorite/Viwers' 
import Accordion from '../Banner/Accordion/Accordion'
const Login = (props) => {
  const { loginWithPopup } = useAuth0();
  const dispatch = useDispatch();

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     '& > *': {
  //       margin: theme.spacing(1),
  //     },
  //   },
  //   extendedIcon: {
  //     marginRight: theme.spacing(1),
  //   },
  // }));
  useEffect(() => {
    dispatch(authenticateUser());
    
  },[dispatch]);

  const handleLogin = () => {
    loginWithPopup();
  }
  return (
    <>
      {/* <Nav>
        <a href="/">
          <Logo src={logo} alt="Marvel" />
        </a>

        <a href="/homeComics">
          <LogIn>HOME</LogIn>
        </a>
      </Nav>
      <HeaderBanner />
    </>
  ) : ( */}
      <Nav>
        <a href="/">
          <Logo src={logo} alt="Marvel" />
        </a>
        <button
          className="btn btn-primary btn-block"
          onClick={ handleLogin }
        >
          LOG IN
        </button>
        {/* <a href="/login">
          <LogIn>LOG IN</LogIn>
        </a> */}
        {/* <button
          className="btn btn-primary btn-block"
          onClick={ handleSignUp }
    >
      SIGN UP
    </button> */}
      </Nav>
      <HeaderBanner />
      <Cont>
        <div class="overlay">
          <ContainerPlan>
            <div className="">
              <Pricing>
                <Title> GET MARVEL COMIC Y STARPLUS+ </Title>
                <Caption>
                  Get endless entertainment, enjoy your favorites comics and
                  series.{" "}
                </Caption>
                <Caption>Save money with this bundle.</Caption>
                <PriceValue> USD $7/month (final)* </PriceValue>
                <br></br>
                <p target="_blank" href="/formUser">
                  <CheckoutBut totalPrice={7} items={1} totalItems={1} />
                </p>
              </Pricing>
            </div>{" "}
            <div></div>
            <Pricing>
              <Title> GET MARVEL COMIC</Title>
              <Caption>Year subscription MARVEL PLUS</Caption>
              <Caption>
                Access endless Marvel Comics World for a new price!{" "}
              </Caption>
              <PriceValue>USD $70/year (final)*</PriceValue>
              <br></br>
              <p target="_blank" href="/formUser">
                <CheckoutBut totalPrice={7} items={1} totalItems={1} />
              </p>
            </Pricing>
          </ContainerPlan>
        </div>
      </Cont>
      
      <div>
        <Container>
          <Content>
            <CTA>
              <SignUp target="_blank" href="/AboutUs">
                <h3>More Information </h3>
              </SignUp>
              <Description>
              <h1> Get Primer Access to Raya and the last Dragon for an additional
                fee with a Marvel + Subscription. As of 04/05/2022, the price of
                Marvel + and The Marvel Bundle will increase by $1.</h1>
                  </Description>
            </CTA>
            <BackgroundImg />
          </Content>
        </Container>
         <Viewer />
         <Accordion />
        <a href="/">
          <Logo src={logo} alt="Marvel" />
        </a>
        <a href="/admin">
          <LogIn>ACCESS ADMIN</LogIn>
        </a>
      </div>
    </>
  );
};

const First = styled.div`
display: flex;
align-items: center;
border-bottom: 8px solid #222;
width: 100vw;
height: 30rem;
`;
const Const = styled.div`
  display: block;
  color: #f8f8f8;
  position: relative;
  top: 40px;
  min-height: 95vh;
  padding: 5px calc(3.5vw + 5px);
  overflow-x: hidden;
  background-size: cover;
`;


const Cont = styled.div`
  display: block;
  color: #f8f8f8;
  position: relative;
  top: 40px;
  min-height: 95vh;
  padding: 5px calc(3.5vw + 5px);
  overflow-x: hidden;
  background: url("https://wallup.net/wp-content/uploads/2019/10/584202-captain-america-avengers-748x468.jpg")
    no-repeat center center fixed;
  background-size: cover;
`;

const Caption = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #f9f4f4;
  margin-top: 2px;
  margin-bottom: 20px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Pricing = styled.div`
  display: flex;
  justify-content: center;
  background: center;
  width: 390px;
  background: #fff;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 10px 11px 16px 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: center;
  user-select: none;
  margin-right: 30px;
  margin-bottom: 10px;
  :last-child {
    margin-left: 5;
    margin-right: 10;
    background-image: url("http://4everstatic.com/imagenes/850xX/abstractos/fondo-rojo-170204.jpg");
  }
`;
const PriceValue = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 20px;
`;
const ContainerPlan = styled.div`
  display: flex;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  margin-right: auto;
  margin-left: 20px;

  a {
    display: flex;
    align-items: center;
    padding: 0 10px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      letter-spacing: 1.4px;
      font-size: 13px;
      font-weight: bold;
      white-space: nowrap;
      position: relative;

      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0px 4px;
        height: 2px;
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms ease-in-out;
        width: auto;
      }

      &:hover {
        &:before {
          transform: scaleX(1);
          opacity: 1 !important;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
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
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #040709;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 3;
`;
const Logo = styled.img`
  max-height: 100%;
  width: 80px;
  margin-left: 30px;
  display: inline-block;
`;
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  background-image: url("https://cdn.wallpapersafari.com/47/0/gjPEi8.jpg");
  opacity: 0.8;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;
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

export default Login;
