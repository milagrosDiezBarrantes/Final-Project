import React, {useEffect} from 'react';
import AuthenticationButton from './authentication-button';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


const AuthNav = () => {
  const { user } = useAuth0();

  function createUser() {
    console.log("email", user.email, "nickname", user.nickname, "name", user.name)
    axios.post(`http://localhost:3001/user/login`, {email:user.email, nickname: user.nickname, name: user.name})
  }

  useEffect(()=>{
    setTimeout(() => {
      user ? createUser() : console.log('We ´re hiring developers')
    }, 3)
    
  }, []);
  
  return (
    <div className="navbar-nav ml-auto">
    <AuthenticationButton />
  </div>
  )
}

export default AuthNav;