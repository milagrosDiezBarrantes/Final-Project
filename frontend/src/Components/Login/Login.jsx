import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./LoginButton.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { LogoutButton } from "./LogoutButton.jsx";
import { Profile } from "./Profile.jsx";
// import styled from "styled-components";
import {authenticateUser} from '../../Redux/Actions/actions';


function Login() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useAuth0();
  
  const login = useSelector((state) => state);

  const logged = login.ComicsReducer.authentication;

 console.log(isAuthenticated, 'authenticated', login, 'login', logged, 'logged');

  useEffect(() => {
    dispatch(authenticateUser())
  },[])


  return (
    <div>
      {
        isAuthenticated ? <LogoutButton /> : <LoginButton />
      } 
        <Profile />

        {/* <div className="container">
        {
          isAuthenticated ? (
            <>
              <Profile />
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </div> */}
    </div>
  );
}

export default Login;

