// import React from 'react';
// import AuthNav from './auth-nav';
// import { useAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';
// import { Profile } from '../Login/Profile';

// const Prueba = () => {
//   const { user, isAuthenticated } = useAuth0();
  
//   function createUser() {
//     console.log("email", user.email, "nickname", user.nickname, "name", user.name)
//     axios.post(`http://localhost:3001/user`, {email:user.email, nickname: user.nickname, name: user.name})
//   }

//   setTimeout(() => {
//     isAuthenticated ? createUser() : alert('subscribite!!!') 
//   }, 5000)
  
  
//   return (
//     <>
//       <AuthNav />       
//       <Profile />
//     </>
//   );
// };

// export default Prueba;