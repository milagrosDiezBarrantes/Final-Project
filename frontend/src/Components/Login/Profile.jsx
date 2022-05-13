import React from 'react';
import {Image} from 'semantic-ui-react';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { pruebaStatusLog } from '../../Redux/Actions/actions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  const dispatch = useDispatch();
  const login = useSelector((state) => state);
  const logged = login.ComicsReducer.prueba;

  // const handleUser = () => {
  //   console.log(user);
  //   dispatch(user ? pruebaStatusLog(user) : null);
  //   console.log('estás ', logged);
  // }


  const navigate = useNavigate();

  useEffect (()=>{
    dispatch(pruebaStatusLog(user));
  }, [dispatch])
  return (
    <div>
     {/* <Image src="https://i0.pngocean.com/files/450/569/192/spider-man-iron-man-marvel-comics-chibi-drawing-spider-man.jpg" size='medium' circular /> */}
      <div className="row align-items-center profile-header">
       <div className="col-md-2 mb-3">
          <Image src={logged.picture} size='medium' circular />
            </div>
            <div className="col-md text-center text-md-left">
              <h2>Name: {logged.name}</h2>
              <p className="lead text-muted">Email:{logged.email}</p>
              <h2>Plan:{logged.plan_id}</h2>
              <h2>Billing: {logged.payment}</h2>
            </div>
          </div>
          <div className="row">
            {/* <pre className="col-12 text-light bg-dark p-4">
              {JSON.stringify(user, null, 2)}
            </pre> */}
          </div>
          <button onClick={() => navigate('/profile/edit')}
          className="btn btn-primary btn-block" >Edit </button>

          <button
          className="btn btn-primary btn-block" onClick={() => navigate('/homeComics')}>Go back</button>
        </div>
        

        
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});