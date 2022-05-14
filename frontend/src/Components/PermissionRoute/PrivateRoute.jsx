import { Navigate, Outlet } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAdmin } from '../../Redux/Actions/actions';
import Loading  from '../Loading/Loading';

const PrivateRoute = ({ redirectPath = '/' }) => {
    const { user } = useAuth0();
    const dispatch = useDispatch();

    const userAdmin = useSelector(state => state.CharactersReducer.loginUser)
    const role = userAdmin.user ? userAdmin.user[0]?.role : null

    // useEffect(()=>{
    //     setTimeout(() => {
    //     
    //     }, 5000)
        
    //   }, []);


    useEffect(() => {
        dispatch(getAdmin(user?.email))
    }, [dispatch, user]);
    
    if (!user) {
        console.log('user not logged in')
        return <Navigate to={redirectPath} replace />;
    }
    
    console.log('user logged in')
        return (
            <>
                {
                    // pageCurrent?.length <= 0 ? 
    // (<img src={loading} alt='loading'/>) 
    // : typeof pageCurrent[0] === 'object' ? 
    // (
                    userAdmin?.length <= 0 ?
                    <Loading />
                    :
                    role === 'ROLE_SUPER_ADMIN'
                    ? <Outlet/> : 
                    <p> You are not allowed to perform this action.</p>
                } 
                
            </>
            
        ) 
    };


export default PrivateRoute;