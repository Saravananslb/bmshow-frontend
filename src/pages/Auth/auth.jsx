import React, { useContext, useState } from "react";
import { userSignIn, userSignUp, cookies } from "../../services/apiCall";
import { Context } from "../../store/context";
import styles from "./auth.module.css";
import { OPEN_AUTH } from "../../store/action.types";

export const SignIn = () => {

  const [signIn, setSignIn] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    isSignInPage: true,
    msg: ''
  })

  const {state, dispatch } = useContext(Context);

  const loginHandle = (e) => {
    if (signIn.isSignInPage){
      userSignIn(signIn).then(data =>{
        console.log(data)
        if (data.status){
          cookies.set('authToken', data.authToken);
          setSignIn({...signIn, msg: data.message})
          onHandleClose();
        }
        else {
          setSignIn({...signIn, msg: data.message})
        }
      }
        
      );
    }
    else {
      if (signIn.password === signIn.confirmPassword) {
        userSignUp(signIn).then(data => {
          console.log(data);
          if (data.status){
            setSignIn({...signIn, msg: data.message})
          }
          else {
            setSignIn({...signIn, msg: data.message})
          }
        }
        ).catch(error => {
          console.log(error)
        });
      }
    }
    
  }

  const handleSignInChange = () => {
    setSignIn({
      ...signIn,
      isSignInPage: !signIn.isSignInPage
    })
  }

  const onHandleClose = () => {
    dispatch({
      type: OPEN_AUTH,
      payload: {
        openAuth: false,
      },
    });
  }

  return (
    <div className={styles.signInContainer}>
      <div className={styles.closeButton} onClick={onHandleClose} >x</div>
      <div className={`${styles.title} ${styles.center}`}>{signIn.isSignInPage ? 'Sign In' : 'Get Started'}</div>
      <div>
        <input type="text" placeholder="Email" name="email" value={signIn.email} onChange={(e) => setSignIn({...signIn, email: e.target.value})} />
      </div>
      <div>
        <input type="password" placeholder="password" value={signIn.password} onChange={(e) => setSignIn({...signIn, password: e.target.value})} />
      </div>
      {!signIn.isSignInPage ? <div>
        <input type="password" placeholder="Confirm password" value={signIn.confirmPassword} onChange={(e) => setSignIn({...signIn, confirmPassword: e.target.value})} />
      </div> : null}
      
      <div className={styles.newUser} onClick={handleSignInChange} >{signIn.isSignInPage ? 'New User ?' : 'Existing User ?'}</div>
      <div>{signIn.msg}</div>
      <div className={`${styles.center}`}>
        <button onClick={loginHandle} >Continue</button>
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
