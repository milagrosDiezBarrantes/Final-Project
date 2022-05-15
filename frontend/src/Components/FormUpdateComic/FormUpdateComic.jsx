import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getById, updateComic } from "../../Redux/Actions/actions";
import { Container, Form, Button } from "semantic-ui-react";
import { FaTimesCircle } from "react-icons/fa";
import AlertPopUp from "../AlertPop/AlertPop";
import { validate } from "../../Functions/validacionesForm/validationForm";
import { Link } from "react-router-dom";

const FormUpdateComic = ({ handleClose, id }) => {
  const dispatch = useDispatch();
  const comic = useState((state) => state.ComicsReducer.copyComics);

  console.log(comic);
  const [comicDetail, setcomicDetail] = useState({
    title: "",
    img: "",
    description: "",
    pages: "",
    creators: [],
  });

  const [error, setError] = useState({});
  const { title, description, image } = comicDetail;

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  // useEffect(()=> {
  //     setcomicDetail(comic)

  // }, [comic]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setcomicDetail({ ...comicDetail, [name]: value });

    setError(validate({ ...comicDetail, [name]: value }));
  };

  const [activeAlertUpgrade, setActiveAlertUpgrade] = useState(false);

  const handleOpenAlertUpgrade = () => {
    setActiveAlertUpgrade(!activeAlertUpgrade);
  };

  const [successForm, setSuccessForm] = useState(false);
  const handleUpgradeSuccesForm = () => {
    setSuccessForm(!successForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpenAlertUpgrade();
  };

  useEffect(() => {
    if (successForm) {
      dispatch(updateComic(id));
      setcomicDetail({
        title: "",
        img: "",
        description: "",
        pages: "",
        creators: [],
      });

      // handleClose();
      // handleUpgradeSuccesForm()
    }
  }, [dispatch, id, successForm]);

  return (
    <Container
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Link to="/admin">
        <Button>Go back</Button>
      </Link>

      <h1 style={{ textAlign: "center" }}> UPDATE THE COMIC</h1>
      <Form style={{ width: "30%" }} onSubmit={handleSubmit}>
        <Button
          onClick={() => {
            handleClose();
            setcomicDetail({
              name: "",
              description: "",
              image: "",
            });
          }}
        >
          <FaTimesCircle />
        </Button>
        <div>
          <label>Title:</label>
          <input
            type="text"
            placeholder="Title comic"
            name={title}
            value={title}
            onChange={handleChange}
          />
          {error.title && <p style={{ color: "red" }}> {error.title}</p>}
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name={description}
            value={description}
            placeholder="Description comic"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            name={image}
            value={image}
            onChange={handleChange}
            placeholder="Image comic"
          />
          {error.picture && <p style={{ color: "red" }}> {error.picture}</p>}
        </div>
      </Form>
      <AlertPopUp
        activeAlert={activeAlertUpgrade}
        actionAlert="update"
        handleOpenAlert={handleOpenAlertUpgrade}
        handleSuccess={handleUpgradeSuccesForm}
      />
    </Container>
  );
};

export default FormUpdateComic;
