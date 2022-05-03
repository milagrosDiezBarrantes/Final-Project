import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
//import TvIcon from "@material-ui/icons/Tv";
import ComicsIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import CharactersIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#151515",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Characters"
        href="/homeCharacter"
        icon={<CharactersIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Comics"
        href="/homeComics"
        icon={<ComicsIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Favorite"
        href="/Favorite"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        href="/searchPrueba"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}