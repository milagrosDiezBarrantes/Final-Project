import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';

import Loading from '../Loading/Loading';

const CommonRoute = ({ redirectPath = '/' }) => {
    //const dispatch = useDispatch();
    
    const userAdmin = useSelector(state => state.ComicsReducer.user)
    console.log(userAdmin)
    
    setTimeout(() => {
        <Loading />
    }, 5000)

        return (
            <>
                {
                    userAdmin?.role === "ROLE_PRIME"
                    ? <Outlet/> : 
                    <p> You are not allowed to perform this action.</p> 
                    
                } 
                
            </>
            
        ) 
    };


export default CommonRoute;