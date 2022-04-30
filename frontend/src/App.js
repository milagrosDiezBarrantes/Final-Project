import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'



import LandingPage from "./Components/LandingPage/LandingPage";
import HomeCharacter from "./Components/HomeComponent/HomeCharacter/HomeCharacter";
import HomeComics from "./Components/HomeComponent/HomeComic/HomeComics";
import DetailComic from "./Components/Details/DetailComic/DetailComic"
import DetailCharacter from "./Components/Details/DetailCharacter/DetailCharacter"
import Login from "./Components/Login/Login.jsx";
import FormMaterialUI from "./Components/Form/FormMaterialUI";
import NavBar from "./Components/Navbar/Navbar"
import Form from "./Components/Form/Form";
import FormDos from "./Components/Form/FormDos";
// import Login from "./Components/Login/Login.jsx";


import { ThemeProvider } from '@mui/material/styles'
import theme from "./Styles/Styles";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/formTres' element={<FormDos />} />
          <Route path='/login' element={<Login />} />
          <Route path='/LandingPage' element={<LandingPage />} />
          <Route path='/homeCharacter' element={<HomeCharacter />} />
          <Route path='/homeComics' element={<HomeComics />} />
          <Route path='/homeComics/DetailComic/:id' element={<DetailComic />} />
          <Route path='/homeComics/DetailCharacter/:id' element={<DetailCharacter />} />
          <Route path='/form' element={<Form />} />
          <Route path='/formDos' element={<FormMaterialUI />} />
          <Route path='/' element={<NavBar />} />
          <Route path='*' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}





export default App;



