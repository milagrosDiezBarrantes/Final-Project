import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./button.css";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div>

        {/* <button >
          <a href="mailto:281212.namaste@gmail.com?Subject=Te%20contacto%20de%20tu%20portafolio">Contact Me</a>
        </button> */}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          LOG OUT
        </button>
        {/* <button className="logout" >
          <a  className="letra" color="white" href="mailto:281212.namaste@gmail.com?Subject=Te%20contacto%20de%20tu%20portafolio">Contact Me</a>
        </button>
        <button className="logout" onClick={() => logout({ returnTo: window.location.origin })}>
          LOGOUT
        </button> */}
    </div>
  );
};
