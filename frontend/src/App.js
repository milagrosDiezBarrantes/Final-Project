import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import HomeCharacter from "./Components/HomeComponent/HomeCharacter/HomeCharacter";
import HomeComics from "./Components/HomeComponent/HomeComic/HomeComics";
import DetailComic from "./Components/Details/DetailComic/DetailComic";
import DetailCharacter from "./Components/Details/DetailCharacter/DetailCharacter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Styles/Styles";
import "./index.css";
import Admin from "./Components/Admin/Admin";
import Profile from "./Components/Login/Profile";
import "./App.css";
import { Container } from "@material-ui/core";
import FormAdmin from "./Components/Form/FormAdmin";
import Lecture from "./Components/Lecture/Lecture";
import FormEditUser from "./Components/FormEditUser/FormEditUser";
import FormUpdateComic from "./Components/FormUpdateComic/FormUpdateComic";
import FormSubscribeUser from "./Components/FormSubscribeUser/FormSubscribeUser.jsx";
import Favorite from "./Components/HomeComponent/Favorite/Favorite";
import FormLoginUser from "./Components/FormLoginUser/FormLoginUser";
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const user = useSelector((state) => )
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
          <Route path='/formAdmin' element={<FormAdmin />} />
          <Route exact path='/lecture' element={<Lecture />} />
          <Route path='/formLoginUser' element={<FormLoginUser />} /> 
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/editProfile' element={<FormEditUser/>} />
          <Route path='/admin/comic' element={<FormUpdateComic/>} />
          <Route path='/formSubscribe' element={<FormSubscribeUser/>} />
          <Route path='/homeComics/DetailCharacter/:id' element={<DetailCharacter />} />
          <Route path='/form' element={<Form />} />
          <Route path='/formDos' element={<FormMaterialUI />} />
          <Route path='/' element={<NavBar />} />
      </Routes>
      </Container>
    </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
