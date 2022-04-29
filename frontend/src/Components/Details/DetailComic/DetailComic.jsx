import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../../Redux/Actions/actions";

import styles from "./Detail.module.css";

const DetailComic = () => {
  const {id}= useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  const comic = useSelector((state) => state);
  
  let detail = comic.ComicsReducer.selectedComic
  
  return (
    detail.length === 0 ? (<h1>Loading...</h1>) : 
  
    <div className={styles.wrapper}>
    <div className={styles.imagen}>
        <img
          className={styles.imagen}
          alt={detail[0].title}
          title={detail[0].title}
          src={detail[0].img}
        />
      </div>  
      <div className={styles.info}>    
        <h1 className={styles.title}>{detail[0].title}</h1>

        <div className={styles.description}>
          <p>{detail[0].description}</p>
          <button className={styles.variantcovers}>Variant Covers</button>
         
        </div>
        <div className={styles.description}>
        {
          detail[0].creators.map((creator) => { 
            return (
              <>
              <div className={styles.creator}>
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
