import React,{ useEffect} from "react";

import {useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import {getAllUsers, filterByPlan} from '../../Redux/Actions/actions';

import { Icon, Label, Menu, Table, Dropdown, Button } from 'semantic-ui-react'



const Admin = () => {
  //CRUD COMICS

  const history = useNavigate();
  const dispatch = useDispatch();
  
  const usersList =useSelector((state) => state);
  let  users = usersList.ComicsReducer.copyUsers;
  const [showUsers, setShowUsers] = React.useState(false);
console.log(showUsers);
  
  console.log('users', users);


  
const options = [
    { key: 'standar', text: 'Monthly', value: 'standar' },
    { key: 'premium', text: 'Annual', value: 'premium' },
    { key: 'inactive', text: 'Inactive', value: 'inactive' }
  ]
  

  
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
        
            {/*goes to form to create */}
           <Button onClick={() => history("/admin/comic")}>Add New Comic</Button>
           <Button onClick={() => history("/admin/editComic")}>Edit Comic</Button>
           <Button onClick={() => history('/admin')}>Delete Comic</Button>
<br/>
<br/>
<br/>
<br/>
         {/* //seccion filtros */}





         <div>
             <div>
                 <h2>Users</h2>
                <select >
                 <option value= ''>Filter by Plan</option>
                    <option value='standar'>Monthly</option>
                    <option value='premium'>Annual</option>
                    <option value='inactive'>Canceled</option>
                 </select>                
                <button onClick={handleAll}>Show all users</button>
             </div>
                <div>

                <br/>
<br/>
<br/>
<br/>

                        <Table celled>
    <Table.Header>
    <Label ribbon>USERS</Label>
      <Table.Row>
        <Table.HeaderCell>Fullname</Table.HeaderCell>
        <Table.HeaderCell>email</Table.HeaderCell>
        <Table.HeaderCell>Username</Table.HeaderCell>
        <Table.HeaderCell>Plan</Table.HeaderCell>
        <Table.HeaderCell>Id</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    {showUsers && users?.map((user) => {
                    return (
    
                        <Table.Row>    
        <Table.Cell>{user.firstName + user.lastName}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>{user.userName}</Table.Cell>
        <Table.Cell>{user.plan}</Table.Cell>
        <Table.Cell>Edit:{user.id}</Table.Cell>
      
        </Table.Row>
              
              )
                })}       
                                         </Table>            
         </div>
         <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
    <br/>
<br/>
<br/>
<br/>

      </div>
        {/* Seccion stats */}

        <Button onClick={() => history("/nunca jamás")}>New users</Button>
        <Button onClick={() => history("/nunca jamás")}>Lost users</Button>
        <Button onClick={() => history("'nunca jamás")}>Billing</Button>


      </div>
  )
}

export default Admin;
