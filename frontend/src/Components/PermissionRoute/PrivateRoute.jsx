import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ redirectPath = '/' }) => {
    //const dispatch = useDispatch();
    const userAdmin = useSelector(state => state.ComicsReducer.user)
    console.log(userAdmin)
        
    setTimeout(() => {
            <Loading />
        }, 1000)
    

        return (
            <>
                {
                    userAdmin?.role === "ROLE_SUPER_ADMIN"
                        ? <Outlet/> : 
                        <>
                            <p> You are not allowed to perform this action.</p>    
                        </>
                } 
                
            </>
            
        ) 
    };


export default PrivateRoute;