import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../Redux/Actions/actions';

const PrivateRoute = ({ component: Component, rest }) => {
    const dispatch = useDispatch()
    const { user } = useAuth0();

    const userRedux = useSelector(state => state.CharactersReducer.loginUser)
    const role = userRedux.user ? userRedux.user[0]?.role : null

    useEffect(() => {
        if(user){
            dispatch(loginUser(user?.email))
        }
    }, [dispatch, user])

    return (
    <Route {...rest}> {role === "ROLE_ADMIN"
        ? <Component />
        : 
        <div>
            <h5>You are not allowed to perform this action</h5>
            <NavLink to='/' >
                <button>Back</button>
            </NavLink>
        </div>} 
    </Route>
    )
};

export default PrivateRoute;