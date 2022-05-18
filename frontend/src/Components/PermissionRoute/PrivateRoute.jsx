import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import {Link} from 'react-router-dom'
import Loading from '../Loading/Loading';
import {useAuth0} from  '@auth0/auth0-react'
import AuthNav from '../Login/auth-nav';

const PrivateRoute = () => {
    //const dispatch = useDispatch();
    const {user} = useAuth0()
    console.log('user auth zero en private route',user)
    const userAdmin = useSelector(state => state.ComicsReducer.user)
    console.log(userAdmin)
 
        return (
            <>
            <AuthNav />
            
                {
                    !userAdmin?  <Loading /> :  userAdmin.role === "ROLE_SUPER_ADMIN" ? <Outlet/> : 
                        <>
                            <p> You are not allowed to perform this action. If you re not redirected, click below
                            <Link to='/'>Go to log in</Link>
                            </p>    
                        </>
                } 
                
            </>
            
        ) 
    };


export default PrivateRoute;