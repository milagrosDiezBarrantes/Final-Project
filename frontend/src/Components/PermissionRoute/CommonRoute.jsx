import { useSelector } from 'react-redux';
import CheckoutBut from "../PayPal/PayPal";
import styled from "styled-components";
import Loading from '../Loading/Loading';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Lecture from '../Lecture/Lecture';
import Navbar from '../Navbar/Navbar';

const CommonRoute = ({ redirectPath = '/' }) => {
    //const dispatch = useDispatch();
    
    const userPrime = useSelector(state => state.ComicsReducer.user)
    console.log(userPrime.role)
  
  setTimeout(() => {
    <Loading /> 
  }, 1000);

    function user() {
      if(userPrime.role === null || userPrime.role === 'ROLE_USER') {
        return (
          <>
                      <h1> Would you like to read? Subscribe now! </h1>
                      <Cont>
                        <div class="">
                          <ContainerPlan>
                            <div className="">
                              <Pricing>
                                <Title> GET MARVEL COMIC Y STARPLUS+ </Title>
                                <Caption>
                                  Get endless entertainment, enjoy your favorites comics and
                                  series.{" "}
                                </Caption>
                                <Caption>Save money with this bundle.</Caption>
                                <PriceValue>ARS 995/month (final)* </PriceValue>
                                <Caption> CONTRACT NOW!</Caption>
                                
                                <SignUp  target="_blank"  href="/formUser" >
                                <CheckoutBut totalPrice={7} items={1} totalItems={1} />
                              </SignUp>
                              </Pricing>
                            </div>{" "}
                            <div></div>
                            <Pricing>
                              <Title> GET MARVEL COMIC</Title>
                              <Caption>Year subscription MARVEL PLUS</Caption>
                              <Caption>
                                Access endless Marvel Comics World for a new price!{" "}
                              </Caption>
                              <PriceValue>ARS 3.850/year (final)* </PriceValue>
                              <Caption> CONTRACT NOW!</Caption>
                              
                                <SignUp  target="_blank"  href="/formUser" >
                                <CheckoutBut totalPrice={7} items={1} totalItems={1} />
                              </SignUp>
                            
                            </Pricing>
                          </ContainerPlan>
                          <Link to='/'>
                            <Button>Maybe later, take me home</Button>
                          </Link>
                        </div>
                      </Cont>

                      
                    </>  
        )
      }
      if( userPrime.role ==="ROLE_PRIME"||userPrime.role ==="ROLE_SUPER_ADMIN") {
        return (
          <>
            <Lecture/>
          </>
        )
      }
    }

        return (
            <>
              <Navbar />
                {
                    user()
                    
                } 
                
            </>  
        ) 
    };


    // STYLES
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
    const ContainerPlan = styled.div`
    display: flex;
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
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

export default CommonRoute;