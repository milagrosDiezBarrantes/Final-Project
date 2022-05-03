import React, { useState } from "react";
import DrawerComp from "../Navbar/Drawer";
//import { Link } from 'react-router-dom'
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SimpleBottomNavigation from "../Navbar/MainNav";
import { LoginButton } from "../Login/LoginButton";

export default function Navbar() {

  const [clicked, setClicked] = useState(false)
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#151515" }}>
      <Toolbar>
        {isMatch ? (
          <>
            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%", }}>
              MARVEL
            </Typography>
            <DrawerComp />
        
          </>
        ) : (
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="secondary"
              textColor="inherit"
              value={clicked}
              onChange={(e, clicked) => setClicked(clicked)}
            >
               
                <Tab label="Comics" href="/homeComics" />
                <Tab label="About Us" href="/AboutUs" />
                <Tab label="Contact" href="/Contact"  />
            </Tabs>
            <Button >
              <LoginButton/>
            </Button>
            <Button href="/form" sx={{ marginLeft: "10px" }} variant="contained"  style={{ color: "white" }}>
              Sign up
            </Button>
            
          </>
        )}
      </Toolbar>
    
    </AppBar>
  </React.Fragment>
);
};


