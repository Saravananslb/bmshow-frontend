import React from "react";

import styles from "./auth.module.css";

export const SignIn = () => {
  return (
    <div className={styles.signInContainer}>
      <div className={styles.closeButton}>x</div>
      <div className={`${styles.title} ${styles.center}`}>Sign In</div>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <input type="password" placeholder="password" />
      </div>
      <div className={`${styles.center}`}>
        <button>Continue</button>
      </div>
    </div>
  );
};

export const SignUp = () => {
  return (
    <div className={styles.signInContainer}>
      <div className={styles.closeButton}>x</div>
      <div className={`${styles.title} ${styles.center}`}>Get Started</div>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <input type="password" placeholder="Confirm password" />
      </div>
      <div className={`${styles.center}`}>
        <button>Continue</button>
      </div>
    </div>
  );
};
