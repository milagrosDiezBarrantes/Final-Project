import React, {useEffect} from 'react';
import AuthenticationButton from './authentication-button';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


const AuthNav = () => {

  const {user, authenticated} = useAuth0();
  const {name, setname} = React.useState(null);
  const {nickname, setnickname} = React.useState(null);
  const {email, setEmail}= React.useState()

  function createUser() {
    console.log("email", user.email, "nickname", user.nickname, "name", user.name)
    axios.post(`http://localhost:3001/user/login`, {email:user.email, nickname: user.nickname, name: user.name})
  }

  useEffect(()=>{
    setTimeout(() => {
      user ? createUser() : console.log('subscribe!!!') 
    }, 10)
    
  }, []);
  
  return (
    <div className="navbar-nav ml-auto">
    <AuthenticationButton />
  </div>
  )
}

export default AuthNav;