// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const Profile = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   return (
//     isAuthenticated && (
//       <div>
//         <img src={user.picture} alt={user.name} />
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//       </div>
//     )
//   );
// };

// export default Profile;

import React from 'react';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  const dispatch = useDispatch();
  const login = useSelector((state) => state);
  const logged = login.ComicsReducer.loginUser;

  const handleUser = () => {
    console.log(user);
    dispatch(user ? login(user) : null);
    console.log('estás ', logged);
  }

  return (
    <div>
      
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
      <button onClick={handleUser}>Done</button>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});