import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from "./Components/LandingPage/LandingPage";
import HomeCharacter from "./Components/HomeComponent/HomeCharacter/HomeCharacter";
import HomeComics from "./Components/HomeComponent/HomeComic/HomeComics";
import DetailComic from "./Components/Details/DetailComic/DetailComic"
import DetailCharacter from "./Components/Details/DetailCharacter/DetailCharacter"
import Login from "./Components/Login/Login.jsx";
import NavBar from "./Components/Navbar/Navbar";
import Form from "./Components/Form/Form";
import Series from "./Components/Navbar/MainNav";
import SearchIcon from "./Components/Navbar/MainNav";
import ComicsIcon from "./Components/Navbar/MainNav";

import { ThemeProvider } from '@mui/material/styles'
import theme from "./Styles/Styles";
import './index.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/homeCharacter' element={<HomeCharacter />} />
          <Route path='/homeComics' element={<HomeComics />} />
          <Route path='/homeComics/DetailComic/:id' element={<DetailComic />} />
          <Route path='/homeCharacter/DetailCharacter/:id' element={<DetailCharacter />} />
          <Route path='/form' element={<Form />} />
          <Route path='/' element={<NavBar />} />
          <Route path='/' element={<Series />} />
          <Route path='/' element={<SearchIcon />} />
          <Route path='/' element={<ComicsIcon />} />
          <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;



