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
import { Form } from "./Components/Form/Form";

// import Login from "./Components/Login/Login.jsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from "@material-ui/core/colors";

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: purple[500],
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

// import HomeComics from "./Components/HomeComponent/HomeComic/HomeComics";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
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
    </div>
  );
}





export default App;



