import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ redirectPath = '/' }) => {
    //const dispatch = useDispatch();
    const userAdmin = useSelector(state => state.ComicsReducer.user)
    
    console.log(userAdmin)
    // useEffect(() => {
    //     dispatch(getAdmin())
    // }, [dispatch])
    // setTimeout(() => {
    //     <Loading />
    // }, 5000)

        return (
            <>
                {
                    // pageCurrent?.length <= 0 ? 
    // (<img src={loading} alt='loading'/>) 
    // : typeof pageCurrent[0] === 'object' ? 
    // (
        !userAdmin ? 
        <p> You are not allowed to perform this action.</p>
        :
                    userAdmin?.role === "ROLE_SUPER_ADMIN"
                    ? <Outlet/> : 
                    <>
                        <Loading />
                    </>
                } 
                
            </>
            
        ) 
    };


export default PrivateRoute;