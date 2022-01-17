import React from "react";
import { useNavigate } from "react-router-dom";
import { ImageCard } from "../../components/ImageCard";
import { Context } from "../../store/context";

import styles from "./movie.module.css";

export const Movie = () => {
  const navigate = useNavigate();

  const {state, dispatch } = React.useContext(Context);

  const proceedBooking = (activeMovie) => {
    navigate(`/movie/${activeMovie._id}/theater-list`);
  };

  return (
    <div className={styles.movieContainer}>
      <div className={styles.movieHead}>
        <MovieHead proceedBooking={proceedBooking} activeMovie={state.activeMovie}/>
      </div>
      <div className={styles.movieDesc}>
        <MovieDescription description={state.activeMovie.description}/>
      </div>
    </div>
  );
};

const MovieHead = ({ proceedBooking, activeMovie }) => {
  return (
    <div className={styles.movieHeadContainer}>
      <div>
        <ImageCard imageUrl={activeMovie.image_url}/>
      </div>
      <div className={styles.movieRightContainer}>
        <div className={styles.movieName}>{activeMovie.name}</div>
        <div>
          <button onClick={() => proceedBooking(activeMovie)} className={styles.bookButton}>
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

const MovieDescription = ({ description }) => {
  return (
    <div className={styles.movieDesContainer}>
      <div className={styles.movieDescHead}>About the movie</div>
      {description}
      <div>
      </div>
    </div>
  );
};
