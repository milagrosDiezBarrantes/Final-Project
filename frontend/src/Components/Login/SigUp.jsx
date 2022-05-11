import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { userCreate } from '../../Redux/Actions/actions';
import {useNavigate} from 'react-router-dom';

const SignupButton = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const { loginWithRedirect, user } = useAuth0();
const handleClick = () => {
    loginWithRedirect({
      screen_hint: 'signup',

    })
    dispatch(userCreate(user?.email))
    console.log(user)
    navigate('/Profile')
  }

  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() =>
       handleClick()        
      }
    >
      Sign Up
    </button>
  );
};

export default SignupButton;