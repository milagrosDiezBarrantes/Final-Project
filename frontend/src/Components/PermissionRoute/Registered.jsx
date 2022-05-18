import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";
import { useAuth0} from "@auth0/auth0-react";

const Registered = () => {
  //const dispatch = useDispatch();
  const userAdmin = useSelector((state) => state.ComicsReducer.user);
  console.log(userAdmin);
  const [load, setLoad] = React.useState(true);
  const [hola, setHola] = React.useState(false);

  const loadingchill =() =>{

    setTimeout(() => {
      setLoad(false);
      setHola(true);

    }, 5000);

  }
 
  setTimeout(() => {
    <Loading />
  }, 1000);

  return (
    <>
    <Navbar/>
        { 
          load ? <Loading />  : null
        }
        { hola ? 
      (    <>
          {
            userAdmin.role === undefined ?
            <p>
            You are not allowed to perform this action. If you ´re not
            redirected, click below
            <Link to="/">Go to log in</Link>
            </p> 
          :  userAdmin?.role === "ROLE_USER" 
          ?
        <Outlet />
        : (
       
          <p>
            You are not allowed to perform this action. If you ´re not
            redirected, click below
            <Link to="/">Go to log in</Link>
          </p>
      )
      }
      </>)
      : null

        }
        {
          loadingchill()
        }
    </>
  );
};

export default Registered;
