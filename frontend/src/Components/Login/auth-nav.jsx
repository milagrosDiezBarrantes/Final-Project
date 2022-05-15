import React, { useEffect } from "react";
import AuthenticationButton from "./authentication-button";
import { useAuth0 } from "@auth0/auth0-react";
import { login } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";
import axios from "axios";

const AuthNav = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();

  function createUser() {
    axios
      .post(`http://localhost:3001/user/login`, { email: user.email })
      .then((res) => {
        dispatch(login(res.data));
      }, []);
  }

  useEffect(() => {
    setTimeout(() => {
      user ? createUser() : console.log("We ´re hiring developers");
    }, 2);
  }, []);

  return (
    <div className="navbar-nav ml-auto">
      <AuthenticationButton />
    </div>
  );
};

export default AuthNav;
