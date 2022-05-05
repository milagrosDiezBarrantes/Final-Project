import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material';
import "./LoginButton.css";
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button className="LoginButton" onClick={() => 
    loginWithRedirect()} 
    >Login
    </Button>;
};

