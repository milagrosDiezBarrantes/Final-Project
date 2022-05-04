import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
      <Button 
        onClick={() => loginWithRedirect()} 
        sx={{ marginLeft: "10px" }} 
        variant="contained"  
        style={{ color: "white" }} 
      >
        Login
      </Button>
  )
};

