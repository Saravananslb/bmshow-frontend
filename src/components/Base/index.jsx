import React, { useContext, useEffect } from "react";

import { Search } from "../Search";

import styles from "./base.module.css";

import { ReactComponent as BmsLogoIcon } from "../../assets/svg/bmsLogo.svg";
import { Context } from "../../store/context";
import { OPEN_AUTH } from "../../store/action.types";
import { useState } from "react/cjs/react.development";
import {cookies} from '../../services/apiCall';

export const Base = ({ onHistory, children, enabled = true }) => {
  const { dispatch } = useContext(Context);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onSignIn = () => {
    dispatch({
      type: OPEN_AUTH,
      payload: {
        openAuth: true,
      },
    });
  };

  useEffect(() => {
    const cookie = cookies.get('authToken');
    if (cookie)
    setIsAuthenticated(true)
  }, [])

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
              {isAuthenticated ? 
              (<div>
                <button onClick={onSignIn} className={styles.signInButton}>
                  Sign In
                </button>
              </div>) :
              (<div onClick={onHistory} className={styles.bookings}>
                <span>Bookings</span>
              </div>)
              }
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
