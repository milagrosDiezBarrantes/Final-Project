import React from "react";

import {useSelector} from 'react-redux';

import { useNavigate } from "react-router-dom";

const Admin = () => {
  //CRUD COMICS

  const history = useNavigate();
  
  const users =useSelector((state) => state.users);

  const handleFilter = (e) => {
      e.preventDefault();
    //   dispatchEvent(filter(e.target.value))
    console.log("filtramooo", e.target.value);
  };

  return (
      <div>
      {/* //seccion de acciones */}
        <div>
            
            {/*goes to form to create */}
            <button onClick={() => history("/admin/addComic")}>
            Add New Comic
            </button>
            {/*goes to form to editar, agregar input para search by id */}
            <button onClick={() => history("/admin/editComic")}>
                Edit Comic
            </button>

        </div>

         {/* //seccion de acciones */}
         <div>
             <div>
                 <h2>Users</h2>
                <select onChange={handleFilter}>
                 <option value= ''>Filter by Plan</option>
                    <option value='standar'>Standar</option>
                    <option value='premium'>Premium</option>
                    <option value='inactive'>Canceled</option>
                    </select>

                <button onClick={console.log('click en mostrar resultados')}>Show all users</button>
             </div>
                <div>

                {users?.map((user) => {
                    return (
                        <div key={user.id}>
                            <table> 
                                <thead>
                                   <tr>
                                       <th>Full Name</th>
                                       
                                       <th>email</th>
                                       <th>Plan</th>

                                   </tr> 
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{user.firstName + user.lastName}</td>
                                        <td>
                                            {user.email}
                                        </td>
                                        <td>
                                            {user.plan}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                })}                    
         </div>

      </div>

      </div>
  )
}

export default Admin;
