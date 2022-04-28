import React from "react";

import styles from "./Detail.module.css";
const DetailComic = () => {

    const backgroundImageURL =
      "(https://i.annihil.us/u/prod/marvel/i/mg/3/70/6262ff561534b/clean.jpg)";
    const containerStyle = {
      backgroundColor: "black",
    };
     
  return (
    <div className={styles.container} style={containerStyle}>
      <div className={styles.infgrid}>
        <h1 className={styles.title}>Star Wars: Crimson Reign (2021) #4</h1>

        <div className={styles.description}>
          <p data-blurb="971434">
            THE KNIGHTS! THE KNIGHTS OF REN have their role to play in QI’RA’S
            grand scheme to destabilize THE EMPIRE, and their task is arguably
            the most important…Something crucial is locked away in FORTRESS
            VADER, and the Knights must steal it. A heist on the SITH-controlled
            furnace world of MUSTAFAR…with the Galaxy as the prize!
          </p>

              <button className={styles.variantcovers}>Variant Covers</button>
         
        </div>
        <div className={styles.data}>
          <div className={styles.published}>
            <strong>Published:</strong>
          </div>
          <div>April 27, 2022</div>

          <div className={styles.Writer}>
            <strong>Writer:</strong>
          </div>
          <div>
            <a href="https://www.marvel.com/comics/creators/12371/charles_soule">
              Charles Soule
            </a>
          </div>

          <div className={styles.Cover}>
            <strong>Cover Artist:</strong>
          </div>
          <div>
            <a href="https://www.marvel.com/comics/creators/758/leinil_francis_yu">
              Leinil Francis Yu
            </a>
          </div>
          <div className={styles.pencileer}>
            <strong>Penciler:</strong>
          </div>
          <div>
            <a href="https://www.marvel.com/comics/creators/419/steven_cummings">
              Steven Cummings
            </a>
          </div>

          <div className={styles.pencilsname}></div>
        </div>
      </div>
      <div className={styles.imagen}>
        <img
          className={styles.imagen}
          alt="Star Wars: Crimson Reign (2021) #4"
          title="Star Wars: Crimson Reign (2021) #4"
          src="https://i.annihil.us/u/prod/marvel/i/mg/3/70/6262ff561534b/clean.jpg"
        />
      </div>
      </div>
    
  );
};

export default DetailComic;
