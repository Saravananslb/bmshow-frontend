import React from "react";

import styles from "./imageCard.module.css";

export const ImageCard = ({ onClick, name }) => {
  return (
    <div className={styles.imageCardContainer} onClick={onClick}>
      <div>
        <img
          className={`${styles.movieImage} ${
            !name ? styles.movieImageBorder : ""
          }`}
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00320969-ubzerbpnpl-portrait.jpg"
          alt="Nai Sekar"
        />
      </div>
      {name && (
        <div className={styles.imageName}>
          <div>Nai Sekar</div>
        </div>
      )}
    </div>
  );
};
