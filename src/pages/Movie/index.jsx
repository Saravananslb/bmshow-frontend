import React from "react";
import { useNavigate } from "react-router-dom";

import { ImageCard } from "../../components/ImageCard";

import styles from "./movie.module.css";

export const Movie = () => {
  const navigate = useNavigate();

  const proceedBooking = () => {
    navigate("/theater");
  };

  return (
    <div className={styles.movieContainer}>
      <div className={styles.movieHead}>
        <MovieHead proceedBooking={proceedBooking} />
      </div>
      <div className={styles.movieDesc}>
        <MovieDescription />
      </div>
    </div>
  );
};

const MovieHead = ({ proceedBooking }) => {
  return (
    <div className={styles.movieHeadContainer}>
      <div>
        <ImageCard />
      </div>
      <div className={styles.movieRightContainer}>
        <div className={styles.movieName}>Nai Sekar</div>
        <div>
          <button onClick={proceedBooking} className={styles.bookButton}>
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

const MovieDescription = () => {
  return (
    <div className={styles.movieDesContainer}>
      <div className={styles.movieDescHead}>About the movie</div>
      <div>
        Naai Sekar is a Tamil movie is directed by Kishore Rajkumar starring
        Sathish and Pavithra Lakshmi in the lead role.
      </div>
    </div>
  );
};
