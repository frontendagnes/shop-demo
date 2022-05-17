import React, { useState } from "react";
import "./Register.css";
import TextField from '@mui/material/TextField'
import logoDark from "../../assets/logo-dark.png";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../app/utility/firebase";
import ValidationError from "../ValidationError/ValidationError";
import { validateRegister } from "../../app/utility/Validations";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [test, setTest] = useState("");

  const history = useNavigate();

  const onHandleRegister = (e) => {
    e.preventDefault();

    const errMsg = validateRegister(name, email, password, test);
    if (errMsg) {
      setError(errMsg);
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(function (result) {
        return result.user.updateProfile({
          displayName: name,
        });
      })
      .then(() => {
        history("/login");
      })
      .catch((error) => alert(error.message));

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="register">
      <div className="register__container">
        {error && <ValidationError text={error} />}
        <div className="register__top">
          <span>Register</span>
          <Link to="/">
            <img className="register__image" src={logoDark} alt="" />
          </Link>
        </div>
        <form className="register__form">
          <TextField
            className="register__input"
            id="outlined-basic"
            label="enter your first and last name"
            variant="outlined"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className="register__input"
            id="outlined-basic"
            label="enter your email"
            variant="outlined"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="register__input"
            id="outlined-basic"
            label="enter password"
            variant="outlined"
            type="password"
            autoComplete="off"
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
          <button onClick={onHandleRegister}>Register</button>
        </form>
      </div>
      <p>
        Have an account?<Link to="/login"> Sign In</Link>
      </p>
    </div>
  );
}

export default Register;
