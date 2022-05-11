import { Route } from 'react-router'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux';
import { UserBanned } from '../Banned/UserBanned';
import { loginUser } from '../../Redux/Actions/actions'

const CommonRoute = ({ component: Component, rest }) => {

    const dispatch = useDispatch()
    const { user } = useAuth0();

    const userRedux = useSelector(state => state.CharactersReducer.loginUser)
    const role = userRedux.user ? userRedux.user[0]?.role : null

    useEffect(() => {
        if(user) {
            dispatch(loginUser(user?.email))
        }
    }, [dispatch, user])


    return (
    <Route {...rest}> {role !== "ROLE_BANNED"
        ? <Component />
        : <UserBanned/>} 
    </Route>
    )
};

export default CommonRoute;