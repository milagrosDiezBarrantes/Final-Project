import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();
  const handleLogin = () => {
    loginWithPopup();
  }
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={handleLogin}
    >
      Log In
    </button>
  );
};

export default LoginButton;