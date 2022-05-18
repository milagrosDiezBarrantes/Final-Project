import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import {
  getAllUsers,
  filterByPlan,
  getAllComics,
  deleteComic,
  filterByStats,
} from "../../Redux/Actions/actions";
import { Link } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { IoEyeSharp } from "react-icons/io5";
import AuthNav from "../Login/auth-nav";

const Admin = () => {
  //CRUD COMICS

  const history = useNavigate();
  const dispatch = useDispatch();

  const users  = useSelector((state) => state.ComicsReducer.copyUsers);
 // let usersAll = usersList.ComicsReducer.copyUsers;
  const [statsNewUsers, setStatsNewUsers] = React.useState(0);
  const [, setStatsNewpayedUsers] = React.useState(0);
  const [statsInvoicing, setStatsInvoicing] = React.useState(0);

  const [showUsers, setShowUsers] = React.useState(false);
  let comics = useSelector((state) => state.ComicsReducer.copyComics);
  const [showComics, setShowComics] = React.useState(false);
  const createdComics = comics.filter((comic) => comic.id === null);

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
    dispatch(getAllUsers())
    setShowUsers(!showUsers);
  };

  const handleShowComics = (e) => {
    e.preventDefault();
    setShowComics(!showComics);
  };

  const handleDeleteComic = (id) => {
    dispatch(deleteComic(id));
    setShowComics(!showComics);
  };


  const invoice = () => {
    let planArr = users.filter((user) => user.plan_id);
    for (let i = 0; i < planArr.length; i++) {
      if (planArr[i].plan_id === 1) {
        setStatsInvoicing(statsInvoicing + 7);
      } else if (planArr[i].plan_id === 2) {
        setStatsInvoicing(statsInvoicing + 70);
      }
    }
    return statsInvoicing;
  };

  const handleFilterMonth = (e) => {
    e.preventDefault();
    dispatch(filterByStats(e.target.value));
    setStatsNewUsers(users.length);
  console.log('en el habndler filter!!!!', users , e.target.value, typeof(e.target.value))  
    setStatsNewpayedUsers(
      users.filter((user) => user.role === "ROLE_PRIME").length
    );
    setStatsInvoicing(invoice());
  };

  return (
    <div>
    
      <Button className="button">
        <Link to="/">
          HOME
        </Link>
      </Button>

      <AuthNav/>

      <h1 style={{ margin: "4rem", width: "40%" }} class="ui teal header">
        Welcome to your DASHBOARD
      </h1>
      <div>
        <Button
          animated="fade"
          color="orange"
          style={{
            fontSize: "22px",
            margin: "1rem",
            borderRadius: "20px",

            boxShadow: "10px, white",
            width: "20%",
            padding: "1rem",
          }}
        >
          <Button.Content visible style={{ fontSize: "22px" }}>
            New users
          </Button.Content>
          <Button.Content hidden style={{ fontSize: "22px" }}>
            {statsNewUsers}
          </Button.Content>
        </Button>
        <Button
          animated="fade"
          color="pink"
          style={{
            fontSize: "22px",
            margin: "1rem",
            borderRadius: "20px",

            boxShadow: "10px, white",
            width: "20%",
            padding: "1rem",
          }}
        >
          <Button.Content style={{ fontSize: "22px" }} visible>
            New payed users
          </Button.Content>
          <Button.Content style={{ fontSize: "22px" }} hidden>
            {setStatsNewpayedUsers}
          </Button.Content>
        </Button>
        <Button
          animated="fade"
          color="green"
          style={{
            fontSize: "22px",
            margin: "1rem",
            borderRadius: "20px",

            boxShadow: "10px, white",
            width: "20%",
            padding: "1rem",
          }}
        >
          <Button.Content style={{ fontSize: "22px" }} visible>
            Billing this Month
          </Button.Content>
          <Button.Content style={{ fontSize: "22px" }} hidden>
          
            $ {statsInvoicing}
          </Button.Content>
        </Button>
      </div>

      <div>
        <select
          onChange={handleFilterMonth}
          style={{
            fontSize: "22px",
            margin: "1rem",
            borderRadius: "20px",

            boxShadow: "10px, white",
            width: "40%",
            padding: "1rem",
          }}
        >
          <option value="all">Filter by Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">Agost</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>

      <div>
        <h2 style={{ margin: "4rem", width: "40%" }} class="ui teal header">
          USERS MENU
        </h2>

        <div>
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
        {/* <Fab color="primary" aria-label="add">
          <AddIcon onClick={() => history(`/oz`)} />
        </Fab> */}

        <Table
          style={{ margin: "1rem", width: "70%" }}
          celled
          options={options}
          onChange={handleFilter}
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>email</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
              <Table.HeaderCell>Plan</Table.HeaderCell>
              <Table.HeaderCell>Id</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {users === "tabla vacía"
            ? alert("Not users yet")
            : showUsers &&
              users?.map((user) => {
                return (
                  <Table.Row  key ={user.id}>
                    <Table.Cell>
                      {user.name}
                    </Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.role}</Table.Cell>
                    <Table.Cell>{user.plan_id}</Table.Cell>
                    <Table.Cell>
                      <Fab color="secondary" aria-label="edit">
                        <EditIcon
                          onClick={() =>
                            history(`/admin/updateUser/${user.id}`)
                          }
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
        <h2 style={{ margin: "4rem", width: "40%" }} class="ui teal header">
          COMICS MENU
        </h2>

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

        <Table
          style={{ margin: "1rem", width: "70%" }}
          celled
          options={options}
        >
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
                          onClick={() =>
                            history(`/admin/updateComic/${comic.idPrincipal}`)
                          }
                        />
                      </Fab>
                      <Fab color="error" aria-label="delete">
                        <DeleteIcon
                          onClick={() => {
                            handleDeleteComic(comic.idPrincipal);
                          }}
                        />
                      </Fab>
                      <Fab color="secondary" aria-label="add">
                        <IoEyeSharp  onClick={() =>
                            history(`/homeComics/detailComic/${comic.idPrincipal}`)
                          } />
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
