import React,{ useEffect} from "react";

import {useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import {getAllUsers, filterByPlan} from '../../Redux/Actions/actions';

import { Icon, Label, Menu, Table, Dropdown, Button, Accordion, Modal } from 'semantic-ui-react'


const Admin = () => {
  //CRUD COMICS

  const history = useNavigate();
  const dispatch = useDispatch();
  
  const usersList =useSelector((state) => state);
  let  users = usersList.ComicsReducer.copyUsers;
  const { column, data, direction } = useSelector((state) => state.ComicsReducer.sort);
  const [showUsers, setShowUsers] = React.useState(false);
  
const options = [
    { key: 'standar', text: 'Monthly', value: '1' },
    { key: 'premium', text: 'Annual', value: '2' },
    { key: 'inactive', text: 'Inactive', value: '3' }
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

<Table sortable celled fixed>  
  <Table.Header>
          <Table.Row>

          <Table.HeaderCell
              sorted={column === 'id' ? direction : null}
              onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
            >User_ID</Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'username' ? direction : null}
              onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
            >Username</Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'name' ? direction : null}
              onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
            >Lastname, Firstname</Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'plan' ? direction : null}
              onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
            >Plan</Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'startDate' ? direction : null}
              onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
            >Start</Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'active' ? direction : null}
              onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
            >Active?</Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'email' ? direction : null}
              onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
            >email</Table.HeaderCell>

             </Table.Row>
      </Table.Header>

      <Table.Body>
{users?.map((user) => (
  <Table.Row key={user.id}>
    <Table.Cell>{user.id}</Table.Cell>
    <Table.Cell>{user.userName}</Table.Cell>
    <Table.Cell>`{user.lastName} {user.firstName}`</Table.Cell>
    <Table.Cell>{user.plan_id}</Table.Cell>
    <Table.Cell>{user.createdAt.substring(0,10)}</Table.Cell>
    <Table.Cell>True</Table.Cell>
    <Table.Cell>{user.email}</Table.Cell>

  </Table.Row>)

)}
      </Table.Body>

      </Table>      

  )
}

export default Admin;
