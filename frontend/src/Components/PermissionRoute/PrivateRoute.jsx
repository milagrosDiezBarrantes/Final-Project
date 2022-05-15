import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import { getAdmin } from '../../Redux/Actions/actions';

const PrivateRoute = ({ redirectPath = '/' }) => {
    const dispatch = useDispatch();
    const userAdmin = useSelector(state => state.ComicsReducer.admin)
    const role = userAdmin.admin ? userAdmin.admin[0]?.role : null

  useEffect(() => {
    dispatch(getAdmin())
  }, [dispatch])
    // if(role) {
    //     dispatch(getAdmin());
    // }
    // else {
    //     console.log('You are not Admin')
    //     return <Navigate to={redirectPath} replace />;
    // }

        return (
            <>
                {
                    // pageCurrent?.length <= 0 ? 
    // (<img src={loading} alt='loading'/>) 
    // : typeof pageCurrent[0] === 'object' ? 
    // (
                    role === "ROLE_SUPER_ADMIN"
                    ? <Outlet/> : 
                    <p> You are not allowed to perform this action.</p>
                } 
                
            </>
            
        ) 
    };


export default PrivateRoute;