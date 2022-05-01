import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../../Redux/Actions/actions";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import "./DetailComic.css";

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
    <Typography
    component="h1"
    variant="h1"
    align="center"
    color="text.primary"
    >
      Loading ...
    </Typography>
  ) : (
   <Container maxWidth="lg">

<div class="top">
	<div class="columns">
		<div class="column is-full featured_wrapper p-0">
			<img src={detail[0].img} class="featured" alt= {detail[0].title} />
			<div class="title_wrapper">
				{/* <span class="has-text-white">{detail[0].issue}</span> */}
				<h1 class="title is-1 has-text-white"> {detail[0].title} </h1>
				<button>
				Read
				</button>
			</div>
		</div>
	</div>
</div>
<div class="container">
	<div class="columns is-multiline p-0 pt-6 last">
		<div class="column is-full">
			<p class="has-text-white">Action Movies Collection</p>
		</div>

		<div class="auto_columns">
		<div>
			<img src={detail[0].img} alt= {detail[0].title} />
		</div>
		<div class="bodytitle">
		<strong>{detail[0].title}</strong>	
		<p class="bodytext">{detail[0].description}</p>
		{detail[0].creators?.map((creator)=> {
			return(
				<div class="role">
		<strong>{detail[0].creatorRole}</strong>
			<br/>
		<a href='a ningunlugar' class="link" >{detail[0].creatorName}</a>
		</div>

			)
		} )}
		
		<div class="options">
		<button>Read</button>
		
		<button>Serie</button>
		</div>
		</div>

		

		


		</div>

		
		{/* <div class="column is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG">
		</div>
		<div class="column is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image2.PNG">
		</div>
		<div class="column is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img3.PNG">
		</div>
		<div class="column is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img4.PNG">
		</div>
	</div>
	<div class="columns last">
		<div class="column is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img5.PNG">
		</div>
		<div class="column is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img6.PNG">
		</div>
		<div class="column is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img7.PNG">
		</div>
		<div class="column is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img8.PNG">
		</div> */}
	</div>
</div>
   </Container>
  );
};
export default DetailComic;
