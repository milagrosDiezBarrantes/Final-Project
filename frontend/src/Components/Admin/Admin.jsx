import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { getAllUsers, filterByPlan } from "../../Redux/Actions/actions";
import { Link } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";

const Admin = () => {
  //CRUD COMICS
  const history = useNavigate();
  const dispatch = useDispatch();

  const usersList = useSelector((state) => state);
  let users = usersList.ComicsReducer.copyUsers;
  const [showUsers, setShowUsers] = React.useState(false);
  console.log(showUsers);

  console.log("users", users);

  //'/formSubscribe'

  const options = [
    { key: "standar", text: "Monthly", value: 1 },
    { key: "premium", text: "Annual", value: 2 },
    { key: "inactive", text: "Inactive", value: "" },
  ];

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleFilter = (e) => {
    e.preventDefault();
    setShowUsers(true);
    dispatch(filterByPlan(e.target.value));
  };
  const handleAll = (e) => {
    e.preventDefault();
    setShowUsers(!showUsers);
  };

  return (
    
    <div>
      
      <Button className="button">
          <Link to="/">
            <span>HOME</span>
          </Link>
        </Button>

      <h1>Welcome to your dashboard</h1>

      

      <div style={{ margin: '1rem', width: '40%' }}>
        <h1>Users</h1>
        <select onChange={handleFilter} style={{ fontSize:'22px', margin: '1rem', borderRadius:'20px', borderColor:'orange', boxShadow:'10px, white', width: '40%' }}>
            <option value="all">Filter by Plan</option>
            <option value="1">Monthly</option>
            <option value="2">Annual</option>
            <option value="">Canceled</option>
          </select>
          <button onClick={handleAll} style={{ fontSize:'20px', margin: '1rem', width: '90%', borderRadius:'20px', borderColor:'orange', boxShadow:'10px, white' }}> Show all users </button>
      </div>

      <br />
      <br />
      <Button onClick={() => history('/editProfile')}>Edit user profile</Button>
      <Button onClick={() => console.log('banned')}>Banned</Button>
      <br />
      <br />

      <div>
          <Table celled
          options={options}
          onChange= {handleFilter}
          >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Fullname</Table.HeaderCell>
                <Table.HeaderCell>email</Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Plan</Table.HeaderCell>
                <Table.HeaderCell>Id</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            {users === "tabla vacía"
              ? alert("Not users yet")
              : showUsers &&
                users?.map((user) => {
                  return (
                    <Table.Row>
                      <Table.Cell>{user.firstName +' ' + user.lastName}</Table.Cell>
                      <Table.Cell>{user.email}</Table.Cell>
                      <Table.Cell>{user.userName}</Table.Cell>
                      <Table.Cell>{user.plan_id}</Table.Cell>
                      <Table.Cell> Edit:<button onClick={() => history("/falta esta ruta!!!")}> User profile</button></Table.Cell>
                    </Table.Row>
                  );
                })}
          </Table>
        </div>

        <br/>
        <br/>
        <br/>

        <div>
        <Button animated='fade' color= 'orange'>
      <Button.Content visible>New users</Button.Content>
      <Button.Content hidden>3</Button.Content>
    </Button>
    <Button animated='fade' color='red'>
      <Button.Content visible>Lost users</Button.Content>
      <Button.Content hidden>0</Button.Content>
    </Button>
    <Button animated='fade' color='green'>
      <Button.Content visible>Billing this Month</Button.Content>
      <Button.Content hidden>$ 21</Button.Content>
    </Button>
      
    </div>

    <br/>
    <br/>
    <br/>



      {/* //seccion de acciones */}
        <h2>Comics</h2>

        <div>

        
          <br />
          <br />
          <br />
          <br />

          <Button color='orange' onClick={() => history("/admin/comic")}>Add New Comic</Button>
          <Button color='blue' onClick={() => history("/admin/comic")}>Edit Comic</Button>
          <Button color='red'onClick={() => history('/admin')}>Delete Comic</Button>
         
          <br />
          <br />
          <br />
          <br />

      </div>
               
      {/*goes to form to create */}
      
      
      {/* //seccion filtros */}

      
      {/* Seccion stats */}


    
     
      {/* <div>
      {users === "tabla vacía"
              ? alert("Not users yet")
              : showUsers &&
                users?.map((user) => {
                  return (
                    <div key={user.id}>
                      <table>
                        <thead>
                          <tr>
                            <th>Fullname</th>
                            <th>email</th>
                            <th>Username</th>
                            <th>Plan</th> 
                            <th>Id</th>
                            <th>Start date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{user.firstName + user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.userName}</td>
                            <td>{user.plan_id}</td>                            
                            <td>{user.createdAt}</td>
                            <td>
                              <button onClick={() => history("/editProfile")}>Edit</button>
                            </td>
                          </tr>
                        </tbody>
                       </table>  
                    </div>
                  );
                })}
                </div> */}
                </div>
  );
};

export default Admin;
