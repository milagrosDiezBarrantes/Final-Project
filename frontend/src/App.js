import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import FormSubscribeUser from "./Components/FormSubscribeUser/FormSubscribeUser.jsx";

import Favorite from "./Components/HomeComponent/Favorite/Favorite";
import FormLoginUser from "./Components/FormLoginUser/FormLoginUser";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <div className="app">
        <Container>
        <Routes>
          <Route path="/favorite" element={<Favorite />} />
          <Route exact path='/' element={<Banner />} />
          <Route path='/homeCharacter' element={<HomeCharacter />} />
          <Route path='/homeComics' element={<HomeComics />} />
          <Route path='/homeComics/DetailComic/:id' element={<DetailComic />} />
          <Route path='/homeCharacter/DetailCharacter/:id' element={<DetailCharacter />} />
          <Route path='/homeComics/DetailCharacter/:id' element={<DetailCharacter />} />
          <Route exact path='/lecture/:comic' element={<Lecture />} />
         
        {/* Rutas usuario */}
        <Route path='/formSubscribe' element={<FormSubscribeUser/>} />
        <Route path='/formLoginUser' element={<FormLoginUser />} /> 
        <Route path='/profile' element={<Profile />} />
        <Route path='/editProfile' element={<FormEditUser/>} />

        {/* Rutas Admin */}
        <Route path='/admin' element={<Admin/>} />
        <Route path='/updateComic' element={<FormUpdateComic/>} />
        <Route path='/formAdmin' element={<FormAdmin />} />
        <Route path='/admin/comic' element={<FormUpdateComic/>} />  
        <Route exact path='/lecture' element={<Lecture />} />
        <Route path='/postAdmin' element={<PostAdmin/>} />  
        


         

      
      </Routes>
      </Container>
    </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
