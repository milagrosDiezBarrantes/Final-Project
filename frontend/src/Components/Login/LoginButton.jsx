import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { prueba } from '../../Redux/Actions/actions';

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();
const dispatch = useDispatch();
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