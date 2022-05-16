import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById, updateComic } from "../../Redux/Actions/actions";
import { Container, Form, Button } from "semantic-ui-react";
import { FaTimesCircle } from "react-icons/fa";
import AlertPopUp from "../AlertPop/AlertPop";
import { validate } from "../../Functions/validacionesForm/validationForm";
import { Link, useParams} from "react-router-dom";

const FormUpdateComic = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const comic = useSelector((state) => state.ComicsReducer.selectedComic);

  const [comicDetail, setcomicDetail] = React.useState({
    title: comic.title,
    img:comic.img,
    description: comic.description,
    pages: comic.pages,
  });

  const [error, setError] = React.useState({});
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

  const [activeAlertUpgrade, setActiveAlertUpgrade] = React.useState(false);

  const handleOpenAlertUpgrade = () => {
    setActiveAlertUpgrade(!activeAlertUpgrade);
  };

  const [successForm, setSuccessForm] = React.useState(false);
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
      //{()=>history(`/admin/updateComic/${comic.idPrincipal}`)}
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
