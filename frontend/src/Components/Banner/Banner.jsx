import styled from "styled-components";

const Login = (props) => {
  return (
<>
<Nav>
      <a href="/home">
        <Logo src="/images/logo.svg" alt="Marvel" />
      </a>

      
        <LogIn>LOG IN</LogIn>
     
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="home-icon" />
              <span>HOME</span>
            </a>
            </NavMenu>
      
 </Nav>

    <Container >
      <Content>
        <CTA >
       
          <SignUp target="_blank" href="/login">Más Información</SignUp>
          <Description>Get Primer Access to Raya and the last Dragon for an additional fee with a Disney+ Subscription. As of 1/6/21, the price of Disney+ and The Disney Bundle will increase by $1.</Description>
        </CTA>
        <BackgroundImg />
      </Content>
    </Container>
    </>
  );
};

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
  justify-content: space-between;
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
  background-image: url('https://p4.wallpaperbetter.com/wallpaper/710/234/443/superman-batman-dc-marvel-iron-man-captain-america-green-lantern-spider-man-wolverine-the-flash-hulk-hd-wallpaper-preview.jpg');
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
  background-image: url('../Banner/img/mrv.gif');
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
  
`

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

  &:hover{
    background-color: #0483ee;
  }
`;

const Description = styled.p`
font-size: 13px;
font-weight: 1000;
letter-spacing: 1.3px;
line-height: 1.5;
border-radius: 10px;
display:inline-block ;

position: relative;
width: 500px;
height: 65px;
background:#;
border-radius: 15px;
overflow:hidden ;
box-shadow: 0px 10px 10px ;
`;


export default Login;
