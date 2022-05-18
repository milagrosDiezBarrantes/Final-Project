import * as React from 'react';

import { useSelector } from 'react-redux';
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';

const ProtectedRoute = ({  children }) => {

    const user = useSelector((state) => state.ComicsReducer.user);
    console.log('USER EN LÑA RYUTA PROTEGIDA ', user)

        if (!user) {
          return(
          <div>
          <Navigate to="/" replace />
          <p> You are not allowed to perform this action.</p>
          </div>)
        }
      
        return <h1>OLAAAAAAAAAAAAAAAAAAA</h1>;
      };

      export default ProtectedRoute;