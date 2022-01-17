import React from "react";

import styles from "./imageCard.module.css";

export const ImageCard = ({ onClick, name, imageUrl }) => {
  return (
    <div className={styles.imageCardContainer} onClick={onClick}>
      <div>
        <img
          className={`${styles.movieImage} ${
            !name ? styles.movieImageBorder : ""
          }`}
          src={imageUrl}
          alt={name}
        />
      </div>
      {name && (
        <div className={styles.imageName}>
          <div>{name}</div>
        </div>
      )}
    </div>
  );
};
