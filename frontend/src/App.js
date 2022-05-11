import { BrowserRouter, Route, Routes } from "react-router-dom";
//RUTAS USER
import Banner from "./Components/Banner/Banner";
import HomeCharacter from "./Components/HomeComponent/HomeCharacter/HomeCharacter";
import HomeComics from "./Components/HomeComponent/HomeComic/HomeComics";
import DetailComic from "./Components/Details/DetailComic/DetailComic";
import DetailCharacter from "./Components/Details/DetailCharacter/DetailCharacter";
//CSS
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Styles/Styles";
import "./index.css";
import "./App.css";
import { Container } from "@material-ui/core";
//ADMIN
import Admin from "./Components/Admin/Admin";
import PostAdmin from "./Components/PostAdmin/PostAdmin";
import FormUpdateComic from "./Components/FormUpdateComic/FormUpdateComic";
import FormAdmin from "./Components/Form/FormAdmin";
import FormEditUser from "./Components/FormEditUser/FormEditUser";
//USER
import Profile from "./Components/Login/Profile";
// import FormSubscribeUser from "./Components/FormSubscribeUser/FormSubscribeUser.jsx";

import Favorite from "./Components/HomeComponent/Favorite/Favorite";
// import FormLoginUser from "./Components/FormLoginUser/FormLoginUser";


import Lecture from './Components/Lecture/Lecture.jsx'

// import Login from "./Components/Login/Login";
import  Prueba from "./Components/Login/Prueba";
import CommonRoute from "./Components/PermissionRoute/CommonRoute";
import PrivateRoute from "./Components/PermissionRoute/PrivateRoute";
function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <div className="app">
        <Container>
        <Route>  

         
          {/* Rutas usuario */}
          <CommonRoute exact path='/' element={<Banner />} />
          <CommonRoute path='/prueba' element={<Prueba />} />
          <CommonRoute path='/profile' element={<Profile />} />
          <CommonRoute path='/editProfile' element={<FormEditUser/>} />
          <CommonRoute path="/favorite" element={<Favorite />} />
          <CommonRoute path='/homeCharacter' element={<HomeCharacter />} />
          <CommonRoute path='/homeComics' element={<HomeComics />} />
          <CommonRoute path='/homeComics/DetailComic/:id' element={<DetailComic />} />
          <CommonRoute path='/homeCharacter/DetailCharacter/:id' element={<DetailCharacter />} />
          <CommonRoute path='/homeComics/DetailCharacter/:id' element={<DetailCharacter />} />
          <CommonRoute exact path='/lecture/:comic' element={<Lecture />} />
        {/* <Route path='/formSubscribe' element={<FormSubscribeUser/>} />
        <Route path='/formLoginUser' element={<FormLoginUser />} />  */}
         
      
        {/* Rutas Admin */}
        <PrivateRoute path='/admin' element={<Admin/>} />
        <PrivateRoute path='/formAdmin' element={<FormAdmin />} />
        <PrivateRoute path='/postAdmin' element={<PostAdmin/>} />  
        <PrivateRoute path='/admin/comic' element={<FormUpdateComic/>} />
        <PrivateRoute path='/updateComic' element={<FormUpdateComic/>} />
      </Route>
      </Container>
    </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
