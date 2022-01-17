import React, { useContext } from "react";

import { SignIn, SignUp } from "./auth";
import { Context } from "../../store/context";

import styles from "./auth.module.css";

export const Auth = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className={styles.authContainer}>
      <div className={styles.authLogContainer}>
        <SignIn />
      </div>
    </div>
  );
};
