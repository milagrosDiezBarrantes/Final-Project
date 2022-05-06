import React,{ useEffect} from "react";

import {useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import {getAllUsers, filterByPlan} from '../../Redux/Actions/actions';

const Admin = () => {
  //CRUD COMICS

  const history = useNavigate();
  const dispatch = useDispatch();
  
  const usersList =useSelector((state) => state);
  let  users = usersList.ComicsReducer.copyUsers;
  const [showUsers, setShowUsers] = React.useState(false);
console.log(showUsers);
  
  console.log('users', users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleFilter = (e) => {
      e.preventDefault();
      setShowUsers(true);
    dispatch(filterByPlan(e.target.value))
  };
  const handleAll = (e) => {
    e.preventDefault();
    setShowUsers(!showUsers);    
 }

  return (
      <div>
      {/* //seccion de acciones */}
      <h2>Comics</h2>
        <div>
            {/*goes to form to create */}
            <button onClick={() => history("/admin/addComic")}>
            Add New Comic
            </button>
            {/*goes to form to editar, agregar input para search by id */}
            <button onClick={() => history("/admin/editComic")}>
            Edit Comic
            </button>
            <button onClick={() => alert('Comic deleted')}>
            
            Delete Comic
            </button>

        </div>

         {/* //seccion filtros */}
         <div>
             <div>
                 <h2>Users</h2>
                <select onChange={handleFilter}>
                 <option value= ''>Filter by Plan</option>
                    <option value='standar'>Monthly</option>
                    <option value='premium'>Annual</option>
                    <option value='inactive'>Canceled</option>
                 </select>

                
                <button onClick={handleAll}>Show all users</button>
             </div>
                <div>

                {showUsers && users?.map((user) => {
                    return (
                        <div key={user.id}>
                            <table> 
                                <thead>
                                   <tr>
                                       <th>Full Name</th>
                                       <th>email</th>
                                       <th>Plan</th>
                                       <th>Id</th>

                                   </tr> 
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{user.firstName + user.lastName}</td>
                                        <td>
                                            {user.email}
                                        </td>
                                        <td>{user.userName}</td>
                                        <td>{user.plan}</td>
                                        <td>Edit:{user.id}</td>
                                        {/* <td><RUTA en el back(`/db?id=${user.id}`)> Edit User profile</Link></td> */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>                        

                    )
                })}                    
         </div>

      </div>
        {/* Seccion stats */}


      </div>
  )
}

export default Admin;
