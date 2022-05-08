import React, { useState } from "react";
<<<<<<< Updated upstream
import DrawerComp from "../Navbar/Drawer";
import { Link } from 'react-router-dom'
import logo from "../Banner/img/marvel.jpg";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styled from "styled-components";
=======
import BottomNavigationAction from "../Navbar/MainNav";
import Link from "react-router-dom";

>>>>>>> Stashed changes
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
<<<<<<< Updated upstream
import SimpleBottomNavigation from "../Navbar/MainNav";
import { useAuth0 } from "@auth0/auth0-react";
export default function Navbar() {
  const { logout } = useAuth0();
  const [clicked, setClicked] = useState(false)
=======
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";

const Header = () => {
  const [value, setValue] = useState();
>>>>>>> Stashed changes
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
<<<<<<< Updated upstream
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
                <Tab label="Comics" href="/homeComics" />
                {/* <Tab label="About Us" href="/AboutUs" />
                <Tab label="Contact" href="/Contact"  /> */}
            </Tabs>
            <Link to= '/profile'>
              <Avatar alt="A" src="/static/images/avatar/1.jpg" />
            </Link>
            <a href='/'  onClick={() => logout({ returnTo: window.location.origin })} >
            <LogIn>LOG OUT</LogIn>
          </a>
      </Toolbar>
      <SimpleBottomNavigation />
    
    </AppBar>
  </>
  )
}

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
=======
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Marvel
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
              
                <Tab label='Comics' />
                <Tab label="Personajes" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <BottomNavigationAction />
    </React.Fragment>
  );
};

export default Header;
>>>>>>> Stashed changes
