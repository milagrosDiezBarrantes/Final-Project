import React, { useState } from "react";
import DrawerComp from "../Navbar/Drawer";
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
       
      <AppBar sx={{ background: "#000000" }}>
    
      <Toolbar>
       
        {isMatch ? (
          <>
            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
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
              valclickedue={clicked}
              onChange={(e, clicked) => setClicked(clicked)}
            >
              <Tab label="Comics" />
              
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
      <SimpleBottomNavigation />
    </AppBar>
  </React.Fragment>
);
};


