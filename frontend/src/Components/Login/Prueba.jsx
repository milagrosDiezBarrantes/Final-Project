import React from 'react';

import AuthNav from './auth-nav';
import { useAuth0 } from '@auth0/auth0-react';
const Prueba = () => {

const {user} = useAuth0();
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <AuthNav />
{           console.log(user)
}        

<h1>{user?.nickname}</h1>
</div>
      </nav>
    </div>
  );
};

export default Prueba;