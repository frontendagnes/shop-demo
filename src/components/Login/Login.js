import React from "react";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
function Login() {
  return (
    <div className="login">
      <h1>LogIn</h1>
      <form className="login__form">
        <TextField id="outlined-basic" label="Frist name" variant="outlined" />
        <TextField id="outlined-basic" label="Last name" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Street and numer"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Zip-Code" variant="outlined" />
        <TextField id="outlined-basic" label="Town" variant="outlined" />
      </form>
    </div>
  );
}

export default Login;
