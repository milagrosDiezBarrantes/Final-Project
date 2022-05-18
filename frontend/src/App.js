import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
//RUTAS USER
import Banner from "./Components/Banner/Banner";
import AboutUs from "./Components/AboutUs/AboutUs";
import HomeCharacter from "./Components/HomeComponent/HomeCharacter/HomeCharacter";
import HomeComics from "./Components/HomeComponent/HomeComic/HomeComics";
import DetailComic from "./Components/Details/DetailComic/DetailComic";
import DetailCharacter from "./Components/Details/DetailCharacter/DetailCharacter";
//CSS
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Styles/Styles";
import "./index.css";
import "./App.css";
// import { Container } from "@material-ui/core";

//ADMIN
import Admin from "./Components/Admin/Admin";
import PostAdmin from "./Components/PostAdmin/PostAdmin";
import FormUpdateComic from "./Components/FormUpdateComic/FormUpdateComic";
import FormAdmin from "./Components/Form/FormAdmin";

//USER
import Profile from "./Components/Login/Profile";
import Favorite from "./Components/HomeComponent/Favorite/Favorite";
import Lecture from "./Components/Lecture/Lecture.jsx";
import Playlist from "./Components/HomeComponent/Play/List.jsx";

// RUTAS PRIVADAS
// import CommonRoute from "./Components/PermissionRoute/CommonRoute";
// import PrivateRoute from "./Components/PermissionRoute/PrivateRoute";

import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Components/Loading/Loading";

// LOGIN
import FormEditUser from "./Components/FormEditUser/FormEditUser";
import PrivateRoute from "./Components/PermissionRoute/PrivateRoute";
import CommonRoute from "./Components/PermissionRoute/CommonRoute";
import { UserBanned } from "./Components/Banned/UserBanned";
import { useSelector } from "react-redux";


function App() {
  const { user, isLoading, isAuthenticated } = useAuth0();
  
  const log = useSelector((state) => state.ComicsReducer.user);

  if (isLoading) {
    return (
      <div className="app">
        <Loading />
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="app">
          {/* <Container> */}
  
          <Routes>
            <Route path='/profile' element={log.role === 'ROLE_SUPER_ADMIN?'? <Profile /> : (<Navigate to='/admin'/>)} /> 
            <Route exact path="/" element={<Banner />} />
            <Route path='/AboutUs' element={<AboutUs />} /> 
            <Route exact path="*" element={<Banner />} />
            {/* <Route path='/login' element={<LoginButton />} />   */}
            {/* USER */}
            
                <Route path='/profile' element={<Profile />} /> 
                <Route path='/profile/edit' element={<FormEditUser />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/homeCharacter" element={<HomeCharacter />} />
                <Route path="/homeComics" element={<HomeComics />} />
            
                <Route
                  path="/homeComics/DetailComic/:id"
                  element={<DetailComic />}
                />
                <Route
                  path="/homeCharacter/DetailCharacter/:id"
                  element={<DetailCharacter />}
                />
                <Route
                  path="/homeComics/DetailCharacter/:id"
                  element={<DetailCharacter />}
                />
                <Route path="/Playlist" element={<Playlist />} />
            
            <Route element ={ <CommonRoute /> } >
              <Route exact path="/lecture/:comic" element={<Lecture />} />
          
            </Route> 



            {/* ADMIN */} 
            <Route path="/formAdmin" element={<FormAdmin />} />
            <Route path="/admin" element={<Admin />} />

          {/* <Route element={ <PrivateRoute /> }>   */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/postAdmin" element={<PostAdmin />} />            
            <Route path="/admin/updateComic/:id" element={<FormUpdateComic />} />
            <Route path="/homeComics" element={<HomeComics />} />
          {/* </Route>   */}
          </Routes>
          {/* </Container> */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
