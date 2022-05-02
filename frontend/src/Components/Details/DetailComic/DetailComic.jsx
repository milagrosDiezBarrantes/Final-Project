import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../../Redux/Actions/actions";

import MyButton from "../../../Styles/MyButton";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Navbar from "../../Navbar/Navbar";

import "./DetailComic.css"

const DetailComic = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  const comic = useSelector((state) => state);

  const [bkg, setBkg] = React.useState("");

  let detail = comic.ComicsReducer.selectedComic;

  useEffect(() => {
    setBkg(detail[0]?.img);
  }, [detail]);

  return detail.length === 0 ? (
    <Typography component="h1" variant="h1" align="center" color="text.primary">
      Loading ...
    </Typography>
  ) : (
    <>
      <div>
        <div class="columns">
          <div class="column is-full featured_wrapper p-0">
            <img src={detail[0].img} class="featured" alt={detail[0].title} />
            <div class="title_wrapper">
              {/* <span class="has-text-white">{detail[0].issue}</span> */}
              <h1 class="title is-1 has-text-white"> {detail[0].title} </h1>
              <MyButton>Read</MyButton>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns is-multiline p-0 pt-6 last">
          <div class="column is-full">
            <p class="has-text-white"></p>
          </div>

          <div class="auto_columns">
            <div>
              <img src={detail[0].img} alt={detail[0].title} />
            </div>
            <div class="bodytitle">
              <Typography
                component="h1"
                variant="h1"
                align="center"
                color="text.primary"
              >
                <strong>{detail[0].title}</strong>
              </Typography>
              <p class="bodytext">{detail[0].description}</p>
              {detail[0].creators?.map((creator) => (
				  <div class="role" key={creator.creatorId}>
					  <strong>{creator.creatorRole}</strong>
					  <br />
					  <a href="a ningunlugar" class="link">
						  {creator.creatorName}
					  </a>
				  </div>
			  ))}

              <div class="options">
                <MyButton>Read</MyButton>
                <MyButton>Serie</MyButton>
              </div>
            </div>

            <Navbar />
          </div>
        </div>
      </div>
      </>
  );
};
export default DetailComic;