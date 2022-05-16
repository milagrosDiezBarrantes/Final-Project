import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  const handleSignUp = () => {
    loginWithRedirect({
      screen_hint: "signup",
    });
  };

  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => handleSignUp()}
    >
      Sign Up
    </button>
  );
};

export default SignupButton;
