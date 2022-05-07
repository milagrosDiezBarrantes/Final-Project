import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from "./Components/Banner/Banner";
import HomeCharacter from "./Components/HomeComponent/HomeCharacter/HomeCharacter";
import HomeComics from "./Components/HomeComponent/HomeComic/HomeComics";
import DetailComic from "./Components/Details/DetailComic/DetailComic"
import DetailCharacter from "./Components/Details/DetailCharacter/DetailCharacter"
import Login from "./Components/Login/Login.jsx";
import { ThemeProvider } from '@mui/material/styles'
import theme from "./Styles/Styles";
import './index.css';
import Admin from "./Components/Admin/Admin";
import Profile from "./Components/Login/Profile";
import "./App.css";
import { Container } from "@material-ui/core";
import FormAdmin from "./Components/Form/FormAdmin";
import Lecture from "./Components/Lecture/Lecture";
import FormEditUser from "./Components/FormEditUser/FormEditUser";
import {FormUpdateComic} from "./Components/FormUpdateComic/FormUpdateComic";
import Paypal from './Components/PayPal/PayPal.jsx';
import { FormSubscribeUser } from "./Components/FormSubscribeUser/FormSubscribeUser";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <div className="app">
        <Container>
        <Routes>
          <Route exact path='/' element={<Banner />} />
          <Route path='/homeCharacter' element={<HomeCharacter />} />
          <Route path='/homeComics' element={<HomeComics />} />
          <Route path='/homeComics/DetailComic/:id' element={<DetailComic />} />
          <Route path='/homeCharacter/DetailCharacter/:id' element={<DetailCharacter />} />
          <Route path='/formAdmin' element={<FormAdmin />} />
          <Route path='/lecture' element={<Lecture />} />
          <Route path='/formSubscribe' element={<FormSubscribeUser />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/editProfile' element={<FormEditUser/>} />
          <Route path='/admin/xomic' element={<FormUpdateComic/>} />
          <Route path='paypal' element={<Paypal/>} />

      </Routes>
      </Container>
    </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;



