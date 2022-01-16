import React from "react";

import styles from "./search.module.css";

export const Search = () => {
  return (
    <input
      type="text"
      placeholder="Search for Movies"
      className={styles.searchInput}
    />
  );
};
