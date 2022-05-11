import {
    Routes,
    Route,
    Link,
    Navigate,
    Outlet,
  } from 'react-router';
import { useEffect } from 'react'
import { useAuth0, useAuthContext } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux';
import { UserBanned } from '../Banned/UserBanned';
import { loginUser } from '../../Redux/Actions/actions'

// const CommonRoute = ({ component: Component, rest }) => {

const ProtectedRoute = ({redirectPath = '/' }) => {

 const { user, isAuthenticated } = useAuth0();

 if (!user) {
    console.log('user not logged in')
    return <Navigate to={redirectPath} replace />;
  }
  
  console.log('user logged in')
    return <Outlet/>;
  };

    // const userRedux = useSelector(state => state.CharactersReducer.loginUser)
    // const role = userRedux.user ? userRedux.user[0]?.role : null

    // useEffect(() => {
    //     if(user) {
    //         dispatch(loginUser(user?.email))
    //     }
    // }, [dispatch, user])


    // return (
    // <Route {...rest}> {role !== "ROLE_BANNED"
    //     ? <Component />
    //     : <UserBanned/>} 
    // </Route>
//     )
// };

export default ProtectedRoute;