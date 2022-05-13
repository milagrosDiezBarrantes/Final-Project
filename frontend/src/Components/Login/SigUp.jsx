import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../Redux/Actions/actions';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const SignupButton = () => {
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loginWithRedirect, user , isAuthenticated} = useAuth0();

    // function createUser() {
    //         console.log("email", user.email, "nickname", user.nickname, "name", user.name)
    //         axios.post(`http://localhost:3001/user`, {email:user.email, nickname: user.nickname, name: user.name})
    //       }

    const handleSignUp = () => {
        loginWithRedirect({
            screen_hint: 'signup',
        })             

    }

    return (
        <button
        className="btn btn-primary btn-block"
        onClick={() =>
            handleSignUp()        
        }
        >
        Sign Up
        </button>
    );
};

export default SignupButton;