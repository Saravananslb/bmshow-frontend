import React from "react";
import { useNavigate } from "react-router-dom";

import { Base } from "../../components/Base";
import { ImageCard } from "../../components/ImageCard";

import styles from "./home.module.css";

export const Home = () => {
  const navigate = useNavigate();

  const onMovieSelect = () => {
    navigate("/movie");
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeSlider}></div>
      <div>
        <MovieContainer onMovieSelect={onMovieSelect} />
      </div>
    </div>
  );
};

const MovieContainer = ({ onMovieSelect }) => {
  return (
    <div className={styles.movieContainer}>
      <div className={styles.sectionTitle}>Movies</div>
      <div className={styles.movieList}>
        <ImageCard onClick={onMovieSelect} name="Nai Sekar" />
        <ImageCard name="Nai Sekar" />
        <ImageCard name="Nai Sekar" />
        <ImageCard name="Nai Sekar" />
        <ImageCard name="Nai Sekar" />
      </div>
    </div>
  );
};
