import React from "react";

import { useNavigate } from "react-router-dom";

const Admin = () => {
  //CRUD COMICS

  const history = useNavigate();
  // const [comicUpdate, setComicUpdate] = React.useState({});
  // const [deleteComic, setDeleteComic] = React.useState({});
  // //related to business logic
  //  const [users, setUsers] = React.useState([]);//nro de usuarios
  //  const [newUsers, setNewUsers] = React.useState([]);//nro de usuarios nuevos
  //  const [lostUsers, setLostUsers] = React.useState([]);//nro de usuarios perdidos

  //  const [comics, setComics] = React.useState([]);//nro de comics
  //  const [trend, setTrend] = React.useState([]);//tendencia
  //  const [newApiComics, setNewApiComics] = React.useState([]);//nuevos comics
  //  const [characters, setCharacters] = React.useState([]);//personajes destacados

  //  const [earns, setEarns] = React.useState([]);//billing month

  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <div>
      {/*goes to form to create */}
        <button onClick={() => history("/admin/addComic")}>
          Add New Comic
        </button>
      </div>
       {/*goes to form to editar, agregar input para search by id */}
      <button type="input" onClick={() => history("/admin/editComic")}>
        Edit Comic
      </button>
    </div>
  );
};

export default Admin;
