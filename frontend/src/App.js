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
import ProtectedRoute from "./Components/PermissionRoute/CommonRoute";
import { useAuth0 } from "@auth0/auth0-react";  
import Loading from "./Components/Loading/Loading";

function App() {

  const {user, isLoading} = useAuth0();
  console.log(user, 'EN TODA LA APP TENGO EL AUTH0?')

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <div className="app">
        {/* <Container> */}
        <Routes>  
        
           {/* <Route path='/formSubscribe' element={<FormSubscribeUser/>} /> */}
          {/* Rutas usuario */}
          <Route exact path='/' element={<Banner />} />
          <Route path='/prueba' element={<Prueba />} />
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/admin' element={<Admin/>} /> */}
          <Route
           element={
            <ProtectedRoute user={user}  />}>
              <Route path='/admin'element ={<Admin />} /> 
              <Route path='/postAdmin' element={<PostAdmin/>} /> 
              <Route path='/formAdmin' element={<FormAdmin />} />
              <Route path='/admin/comic' element={<FormUpdateComic/>} />
              </Route>
         
    

        

            
         
        {/*  
        <Route path='/updateComic' element={<FormUpdateComic/>} />
          <CommonRoute path='/editProfile' element={<FormEditUser/>} />
          <CommonRoute path="/favorite" element={<Favorite />} />
          <CommonRoute path='/homeCharacter' element={<HomeCharacter />} />
          <Route path='/homeComics' element={<HomeComics />} />
          <CommonRoute path='/homeComics/DetailComic/:id' element={<DetailComic />} />
          <CommonRoute path='/homeCharacter/DetailCharacter/:id' element={<DetailCharacter />} />
          <CommonRoute path='/homeComics/DetailCharacter/:id' element={<DetailCharacter />} />
          <CommonRoute exact path='/lecture/:comic' element={<Lecture />} />
       
        <Route path='/formLoginUser' element={<FormLoginUser />} />  */}
         
       
       
      </Routes>
      {/* </Container> */}
    </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
