import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "semantic-ui-react";
import { validate } from "../../Functions/validacionesForm/validationForm";
import { getCreators, postComic } from "../../Redux/Actions/actions";

const PostAdmin = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const creators = useSelector((state) => state.ComicsReducer.creators);
  const idPrincipal = useSelector((state) => state.ComicsReducer.selectedComic);
  const navigate = useNavigate();

  // const disable = useMemo(() => {
  //     if(error.title || error.img ) {
  //         return true;
  //     }
  //     return false;
  // }, [error])

  const [input, setInput] = useState({
    title: "",
    img: "",
    description: "",
    pages: 0,
    creators: [],
  });

  useEffect(() => {
    setError(validate(input));
  }, [input]);
  useEffect(() => {
    dispatch(getCreators());
  }, [dispatch]);

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(typeof input.pages)
  }

  const handleOnPlatforms = function (event) {
    if (!input.creators.find((e) => e === event.target.value)) {
      console.log("if");
      setInput({ ...input, creators: [...input.creators, event.target.value] });
      console.log(input.creators);
      console.log(input.creators[0]);
    } else {
      console.log("else");
      setInput({
        ...input,
        creators: input.creators.filter((e) => e !== event.target.value),
      });
      console.log(input);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("ACA HANDLESUBMIT DEL POST ADMIN", input);
    dispatch(postComic(input));
    alert("Post created successfully!");
    setInput({
      title: "",
      img: "",
      description: "",
      pages: 0,
      creators: [],
    });
    setTimeout(() => {
      navigate(`/homeComics`);
    }, 1500);
  }

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

      <h1 style={{ textAlign: "center" }}> Create new comic</h1>
      <Form style={{ width: "30%" }} onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            placeholder="Comic title"
            name="title"
            value={input.title}
            onChange={handleChange}
          />
          {error.title && <p style={{ color: "red" }}> {error.title}</p>}
        </div>
        <div>
          <label>Description:</label>
          <textarea
            type="text"
            name="description"
            value={input.description}
            placeholder="Description Comic"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="url"
            name="img"
            value={input.img}
            onChange={handleChange}
            placeholder="Comic image"
          />
          {error.picture && <p style={{ color: "red" }}> {error.picture}</p>}
        </div>
        <div>
          <label>Pages</label>
          <input
            type="number"
            name="pages"
            value={input.pages}
            onChange={(e) => {
              console.log(typeof input.pages)
              handleChange(e)}}
            placeholder="Number Pages"
          />
        </div>
        <div>
          <label>Creators</label>

          <select onChange={handleOnPlatforms}>
            {creators &&
              creators.map((e) => (
                <option
                  key={e.id}
                  value={e.fullName}
                  name={e.fullName}
                  onChange={handleOnPlatforms}
                >
                  {e.fullName}
                </option>
              ))}
          </select>

          {input.creators.length > 0 &&
            input.creators.map((e) => (
              <div key={e}>
                <label name={e} value={e}>
                  {e}{" "}
                </label>
                <button type="button" onClick={handleOnPlatforms} value={e}>
                  X
                </button>
              </div>
            ))}
        </div>
        <div>
          <br />
          <br />
          <br />
          <Button
            onChange={handleChange}
            // disabled={disable}
            type="submit"
          >
            Upload new Comic
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default PostAdmin;
