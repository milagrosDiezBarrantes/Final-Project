import { Navigate, Outlet } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ redirectPath = '/' }) => {
    const { user } = useAuth0();

    // const userRedux = useSelector(state => state.CharactersReducer.loginUser)
    // const role = userRedux.user ? userRedux.user[0]?.role : null

    if (!user) {
        console.log('user not logged in')
        return <Navigate to={redirectPath} replace />;
    }
    
    console.log('user logged in')
        return <Outlet/>;
    };

//     return (
//     <Route {...rest}> {role === "ROLE_ADMIN"
//         ? <Component />
//         : 
//         <div>
//             <h5>You are not allowed to perform this action</h5>
//             <NavLink to='/' >
//                 <button>Back</button>
//             </NavLink>
//         </div>} 
//     </Route>
//     )
// };

export default PrivateRoute;