import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./LoginButton.jsx";
import { LogoutButton } from "./LogoutButton.jsx";
import { Profile } from "./Profile.jsx";
import styled from "styled-components";


function Login() {
  const { isAuthenticated } = useAuth0();

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

