import React, { useState } from "react";
import "./Login.css";
import logoDark from "../../assets/logo-dark.png";
import { GoogleLoginButton } from "react-social-login-buttons";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  providerGoogle,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "../../app/utility/firebase";
import { validateLogin } from "../../app/utility/Validations";
//mui
import TextField from "@mui/material/TextField";
// component
import ValidationError from "../ValidationError/ValidationError";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [test, setTest] = useState("");

  const [error, setError] = useState(null);

  const history = useNavigate();

  const onHandleSignIn = (e) => {
    e.preventDefault();

    const errMsg = validateLogin(email, password, test);
    if (errMsg) {
      setError(errMsg);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => history("/"))
      .catch((error) => alert("SignIn error>>", error.message));
  };

  const onHandleLoginWithGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then(() => history("/"))
      .catch((error) => alert("Login with google error", error.message));
  };

  return (
    <div className="login">
      <div className="login__error">
        {error && <ValidationError text={error} />}
      </div>
      <div className="login__container">
        <div className="login__top">
          <span>Log In</span>
          <Link to="/">
            <img className="login__image" src={logoDark} alt="" />
          </Link>
        </div>
        <div className="login__bottom">
          <form>
            <TextField
              className="login__input"
              label="e-mail"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              className="login__input"
              label="password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="age"
              name="age"
              type="number"
              autoComplete="off"
              value={test}
              onChange={(e) => setTest(e.target.value)}
            />
            <button onClick={onHandleSignIn}>Log in</button>
          </form>
        </div>
      </div>
      <div className="login__register">
        You do not have an account? Register <Link to="/register">here</Link>{" "}
      </div>
      <div className="login__buttons">
        <GoogleLoginButton onClick={onHandleLoginWithGoogle} />
      </div>
    </div>
  );
}

export default Login;
