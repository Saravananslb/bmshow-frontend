import React, { useContext } from "react";

import { Search } from "../Search";

import styles from "./base.module.css";

import { ReactComponent as BmsLogoIcon } from "../../assets/svg/bmsLogo.svg";
import { Context } from "../../store/context";
import { OPEN_AUTH } from "../../store/action.types";

export const Base = ({ children, enabled = true }) => {
  const { dispatch } = useContext(Context);

  const onSignIn = () => {
    dispatch({
      type: OPEN_AUTH,
      payload: {
        openAuth: true,
      },
    });
  };

  return (
    <>
      {enabled ? (
        <div className={styles.baseContainer}>
          <div className={styles.header}>
            <nav className={styles.topNav}>
              <div className={styles.bmsLogo}>
                <BmsLogoIcon />
              </div>
              <div className={styles.searchContainer}>
                <Search />
              </div>
              <div>
                <button onClick={onSignIn} className={styles.signInButton}>
                  Sign In
                </button>
              </div>
            </nav>
          </div>
          <div className={styles.body}>{children}</div>
          <div className={styles.footer}></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
