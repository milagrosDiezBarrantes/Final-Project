import React from 'react';
import {Image} from 'semantic-ui-react';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByEmail } from '../../Redux/Actions/actions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';


const Profile = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const login = useSelector((state) => state);
  const logged = login.ComicsReducer.user;
console.log(logged)
  // const handleUser = () => {
  //   console.log(user);
  //   dispatch(user ? pruebaStatusLog(user) : null);
  //   console.log('estás ', logged);
  // }

  const navigate = useNavigate();


  return (
    !logged.email ? <Loading/> :
    <div>
  
    <Navbar/>
{logged.email}

{logged.name}

{logged.nickname}
    {/* 
    
    createdAt: "2022-05-14T11:24:02.702Z"
email: "lucianacha@gmail.com"
id: "6c0b076c-3d2b-4590-a84d-54620e5bbe4a"
name: "Luciana"
nickname: "lucianacha"
picture: "https://www.soycarmin.com/__export/1535404802201/sites/debate/img/2018/08/27/court-prather-588074-unsplash_crop1535404707997.jpg_1037907269.jpg"
plan_id: null
role: null
updatedAt: "2022-05-14T18:13:21.936Z"
     */}
   
     {/* <Image src="https://i0.pngocean.com/files/450/569/192/spider-man-iron-man-marvel-comics-chibi-drawing-spider-man.jpg" size='medium' circular /> */}
      <div className="row align-items-center profile-header">
       <div className="col-md-2 mb-3">
          <Image src={logged.picture} size='medium' circular />
            </div>
            <div className="col-md text-center text-md-left">
              
              <p className="lead text-muted">{logged.email}</p>
              <h2>Welcome</h2>
              <h1>{logged.name}!</h1>
              <br/>
              <br/>
              <h2>Nickname: {logged.nickname}</h2>
              <h2>Plan:{logged.plan_id}</h2>
              <h2>Billing: {logged.payment}</h2>
            </div>
          </div>
          <div className="row">
             {/* <pre className="col-12 text-light bg-dark p-4">
              {JSON.stringify(user, null, 2)}
            </pre>  */}
          </div>
          <br/>
          <br/>
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