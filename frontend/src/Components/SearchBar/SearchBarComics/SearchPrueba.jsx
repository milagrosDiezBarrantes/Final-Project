import {
    Button,
    Tab,
    Tabs,
    TextField,
  } from "@material-ui/core";
  import SearchIcon from "@material-ui/icons/Search";
  import { useEffect, useState } from "react";
  import axios from "axios";
import { getCharacterByName, getComicsByTitle } from "../../../Redux/Actions/actions";
import ComicCard from "../../Cards/ComicCard/ComicCard";
  
  const SearchPrueba = () => {
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
  

  
    const fetchSearch = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
            process.env.REACT_APP_API_KEY
          }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      window.scroll(0, 0);
      getComicsByTitle();
      getCharacterByName();
      // eslint-disable-next-line
    }, [type, page]);
  
    return (
      <div>
        <div>
            <TextField
              style={{ flex: 1 }}
              className="searchBox"
              label="Search"
              variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
              onClick={fetchSearch}
              variant="contained"
              style={{ marginLeft: 10 }}
            >
              <SearchIcon fontSize="large" />
            </Button>
        </div>
        <Tabs
            value={type}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => {
              setType(newValue);
              setPage(1);
            }}
            style={{ paddingBottom: 5 }}
            aria-label="disabled tabs example"
          >
            <Tab style={{ width: "50%" }} label="Search Comic's Title" />
            <Tab style={{ width: "50%" }} label="Search Characters" />
          </Tabs>
        <div className="trending">
          {content &&
            content.map((c) => (
              <ComicCard
                id={c.id}
                title={c.title}
                image={c.img} 
              />
            ))}
        
      </div>
      </div>
    );
  };
  
  export default SearchPrueba;