import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../../Redux/Actions/actions";


const DetailComic = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  const comic = useSelector((state) => state);

  let detail = comic.ComicsReducer.selectedComic

  return (
    detail.length === 0 ? (<h1>Loading...</h1>) :

      <div>
        <div >
          <img

            alt={detail[0].title}
            title={detail[0].title}
            src={detail[0].img}
          />
        </div>
        <div >
          <h1 >{detail[0].title}</h1>

          <div >
            <p>{detail[0].description}</p>
            <button >Variant Covers</button>
            <button >Let's read!</button>

          </div>
          <div >
            {
              detail[0].creators.map((creator) => {
                return (
                  <>
                    <div >
                      <div><strong>{creator.role}</strong></div>
                    </div>
                    <div><a href="a ningun lugar">{creator.name}</a></div>
                  </>
                )
              })

            }
          </div>


        </div>
      </div>
  );
};

export default DetailComic;
