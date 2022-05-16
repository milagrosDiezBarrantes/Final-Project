import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import {
  getAllUsers,
  filterByPlan,
  getAllComics,
  deleteComic,
  updateComic,
} from "../../Redux/Actions/actions";
import { Link } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const Admin = () => {
  //CRUD COMICS
  const user = useAuth0();
  console.log(user);

  const history = useNavigate();
  const dispatch = useDispatch();

  const usersList = useSelector((state) => state);
  let users = usersList.ComicsReducer.copyUsers;
  let usersAll = usersList.ComicsReducer.users;
  const [statsNewUsers, setStatsNewUsers] = React.useState(0);
  const [statsNewpayedUsers, setStatsNewpayedUsers] = React.useState(0);
  const [statsNoRenewalUsers, setStatsNoRenewalUsers] = React.useState(0);
  const [statsInvoicingUsers, setStatsInvoicingUsers] = React.useState(0);

  const [showUsers, setShowUsers] = React.useState(false);
  let comics = useSelector((state) => state.ComicsReducer.copyComics);
  const [showComics, setShowComics] = React.useState(false);
  const createdComics = comics.filter((comic) => comic.id === null);
  console.log("created comics here! ", createdComics);

  
  const options = [
    { key: "standar", text: "Monthly", value: 1 },
    { key: "premium", text: "Annual", value: 2 },
    { key: "inactive", text: "Inactive", value: "" },
  ];

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllComics());
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

  const handleShowComics = (e) => {
    e.preventDefault();
    setShowComics(!showComics);
  };
  
  const handleDeleteComic = (id) => {
    dispatch(deleteComic(id));
    setShowComics(!showComics);
   }

   const handleUpdateComic = (id) => {
     dispatch(updateComic(id));
   }


  return (
    <div>
      <Button className="button">
        <Link to="/">
          <span>HOME</span>
        </Link>
      </Button>

      <h1>Welcome to your dashboard</h1>
      
      <div>
        <Button animated="fade" color="orange">
          <Button.Content visible>New users</Button.Content>
          <Button.Content hidden>3</Button.Content>
        </Button>
        <Button animated="fade" color="red">
          <Button.Content visible>Lost users</Button.Content>
          <Button.Content hidden>0</Button.Content>
        </Button>
        <Button animated="fade" color="green">
          <Button.Content visible>Billing this Month</Button.Content>
          <Button.Content hidden>$ 21</Button.Content>
        </Button>
      </div>

      {/*  */}

      <br />
      <br />
      <Button onClick={() => history("/editProfile")}>Edit user profile</Button>
      <Button onClick={() => console.log("banned")}>Banned</Button>
      <br />
      <br />

      <div>
      <h2 style={{ margin: "4rem", width: "40%" }} class="ui teal header">USERS MENU</h2>
   
      <div >

      <select
          onChange={handleFilter}
          style={{
            fontSize: "22px",
            margin: "1rem",
            borderRadius: "20px",
            
            boxShadow: "10px, white",
            width: "40%",
            padding: "1rem",
          
          }}
        >
          <option value="all">Filter by Plan</option>
          <option value="1">Monthly</option>
          <option value="2">Annual</option>
          <option value="">Canceled</option>
        </select>

        </div>
      <Button
          onClick={handleAll}
          style={{
            fontSize: "20px",
            margin: "1rem",
            width: "30%",
            borderRadius: "20px",
            borderColor: "orange",
            boxShadow: "10px, white",
          }}
        >
         Show all users
        </Button>       
        <Fab color="primary" aria-label="add">
          <AddIcon onClick={() => history(`/oz`)} />
        </Fab>

        <Table style={{margin: "1rem",
            width: "70%"}}  celled options={options} onChange={handleFilter}>
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
                    <Table.Cell>
                      {user.firstName + " " + user.lastName}
                    </Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.userName}</Table.Cell>
                    <Table.Cell>{user.plan_id}</Table.Cell>
                    <Table.Cell>
                    <Fab color="secondary" aria-label="edit">
                        <EditIcon
                          onClick={() => history(`/admin/updateUser/${user.id}`)}
                        />
                      </Fab>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
        </Table>
      </div>

      <br />
      <br />
      <br />

      <div>
      <h2 style={{ margin: "4rem", width: "40%" }} class="ui teal header">COMICS MENU</h2>

        <Button
          onClick={handleShowComics}
          style={{
            fontSize: "20px",
            margin: "1rem",
            width: "30%",
            borderRadius: "20px",
            borderColor: "orange",
            boxShadow: "10px, white",
          }}
        >
        Show uploaded comics
        </Button>

        <Fab color="primary" aria-label="add">
          <AddIcon onClick={() => history("postAdmin")} />
        </Fab>

        <Table style={{margin: "1rem",
            width: "70%"}} celled options={options}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Cover</Table.HeaderCell>
              <Table.HeaderCell>Banner</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {!createdComics
            ? alert("No comics yet")
            : showComics &&
              createdComics?.map((comic) => {
                return (
                  <Table.Row key={comic.idPrincipal}>
                    <Table.Cell>{comic.idPrincipal}</Table.Cell>
                    <Table.Cell>{comic.title}</Table.Cell>
                    <Table.Cell>{comic.img}</Table.Cell>
                    <Table.Cell>{comic.banner}</Table.Cell>
                    <Table.Cell>
                      <Fab color="secondary" aria-label="edit">
                        <EditIcon
                          onClick={() => history(`/admin/updateComic/${comic.idPrincipal}`)}
                        />
                      </Fab>
                      <Fab color ="error" aria-label="delete">
                        <DeleteIcon
                          onClick={()=>{handleDeleteComic(comic.idPrincipal)}}
                        />
                      </Fab>
                      <Fab color="primary" aria-label="add">
                        <AddIcon onClick={() => history("postAdmin")} />
                      </Fab>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
        </Table>
      </div>



    </div>
  );
};

export default Admin;
