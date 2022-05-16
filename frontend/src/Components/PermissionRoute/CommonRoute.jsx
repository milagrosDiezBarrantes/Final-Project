import { Navigate, Outlet } from 'react-router';
import { useAuth0  } from '@auth0/auth0-react';

const CommonRoute = ({redirectPath = '/' }) => {
  const { user } = useAuth0();

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

export default CommonRoute;