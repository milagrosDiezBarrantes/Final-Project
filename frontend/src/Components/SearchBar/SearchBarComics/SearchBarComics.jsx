import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComicsByTitle } from "../../../Redux/Actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { authenticateUser } from "../../../Redux/Actions/actions";
import { FiSearch } from "react-icons/fi";
import swal from 'sweetalert';

export default function SearchBarComics() {
  const dispatch = useDispatch();
  // const { isAuthenticated, loginWithRedirect } = useAuth0();

  // const authorized = useSelector((state) => state.ComicsReducer.authenticated);

  // console.log(isAuthenticated, "es autenticado");
  // console.log(authorized, "es autorizado?");

  // useEffect(() => {
  //   dispatch(authenticateUser());
  // }, []);

  const [title, setTitle] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getComicsByTitle(title));
    setTitle("");
    if (!title) {
      swal({
        title:"Comic's title not found",
        icon: "error",
      });
    }
  }
  return (
    <div>
      <input
        style={{
          borderRadius: "25px",
          border: "none",
          width: "30%",
          padding: "10px",
          margin: "10px",
        }}
        type="text"
        placeholder="Search for a comic"
        value={title}
        onChange={handleChange}
      />
      {/* type="text"
                value={title}
                placeholder="Search comic's title"
                onChange={e => { handleChange(e) }}
            /> */}
      <button
        style={{
          background: "transparent",
          border: "none",
          width: "5%",
          padding: "10px",
          overflow: "visible",
          /* margin: auto; */
          position: "relative",
          margin: "-81px",
        }}
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        <FiSearch />
      </button>
    </div>
   
  );
}




