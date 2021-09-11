import React, { useState } from "react";
import "./Login.css";
import logoDark from "../../assets/logo-dark.png";
import TextField from "@material-ui/core/TextField";
import ValidationError from "../ValidationError/ValidationError";

import { Link, useHistory } from "react-router-dom";
import { auth } from "../../app/utility/firebase";

import { validateLogin } from "../../app/utility/Validations";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [test, setTest] = useState("");

  const [error, setError] = useState(null);

  const history = useHistory();

  const onHandleSignIn = (e) => {
    e.preventDefault();

    const errMsg = validateLogin(email, password, test);
    if (errMsg) {
      setError(errMsg);
      return;
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push("/"))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        {error && <ValidationError text={error} />}
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
              id="outlined-basic"
              label="e-mail"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              className="login__input"
              id="outlined-basic"
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
    </div>
  );
}

export default Login;
