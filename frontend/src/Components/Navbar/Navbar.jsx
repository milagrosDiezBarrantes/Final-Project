import React, { useState } from "react";
// import DrawerComp from "../Navbar/Drawer";
import { Link } from 'react-router-dom'
import logo from "../Banner/img/marvel.jpg";
import userIcon from "../Navbar/userIcon.jpg";
import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
import styled from "styled-components";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SimpleBottomNavigation from "../Navbar/MainNav";
 import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { loginUser } from "../../Redux/Actions/actions";

export default function Navbar() {
  // const dispatch = useDispatch();
  const user = useSelector(state => state.CharactersReducer.loginUser)

  // console.log(user)

  //   useEffect(() => {
  //     dispatch(loginUser(picture))
  //   }, [dispatch, picture]);

    const handleClick = () => {
      //cuando esta true lo pasa a false y vice versa
      setClicked(!clicked)
    }
    

  const [clicked, setClicked] = useState(false)
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);


    return (
      <>
        <AppBar sx={{ background: "#151515" }}>
        <Toolbar>
          {/* {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%", }}>
                MARVEL
              </Typography>
            </>
          ) : (
            <> */}

              <a href="/">
                <img 
                  src={logo} 
                  alt="Marvel" 
                  style={{ maxHeight: '100%',
                  width: '80px',
                  marginLeft: '30px',
                  display: 'inline-block'}} />
              </a>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={clicked}
                onChange={(e, clicked) => setClicked(clicked)}
              >
              { /*   <Tab label="Comics" href="/homeComics" />*/  }
                  {/* <Tab label="About Us" href="/AboutUs" />
                  <Tab label="Contact" href="/Contact"  /> */}
              </Tabs>
              <Link to= '/profile'>
                <Avatar alt="A" src={user.picture} />
              </Link>
              <Link to='/' >
                <LogIn>LOG OUT</LogIn>
              </Link>
        </Toolbar>
        <SimpleBottomNavigation />
      
      </AppBar>
    </>
    )
  }



//             <a href="/">
//               <img 
//                 src={logo} 
//                 alt="Marvel" 
//                 style={{ maxHeight: '100%',
//                 width: '80px',
//                 marginLeft: '30px',
//                 display: 'inline-block'}} />
//             </a>
//             <Tabs
//               sx={{ marginLeft: "auto" }}
//               indicatorColor="secondary"
//               textColor="inherit"
//               value={clicked}
//               onChange={(e, clicked) => setClicked(clicked)}
//             >
//              { /*   <Tab label="Comics" href="/homeComics" />*/  }
//                 {/* <Tab label="About Us" href="/AboutUs" />
//                 <Tab label="Contact" href="/Contact"  /> */}
//             </Tabs>
//             <Link to= '/profile'>
//               <Avatar alt="A" src={userIcon} />
//             </Link>
//             <Link to='/' >
//               <LogIn>LOG OUT</LogIn>
//             </Link>
//       </Toolbar>
//       <SimpleBottomNavigation />
    
//     </AppBar>
//   </>
//   )
// }


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
`