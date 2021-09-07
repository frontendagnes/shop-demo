import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Checkout from "./components/Checkout/Checkout";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Paymant from "./components/Payment/Payment";
import Orders from "./components/Orders/Orders";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
        <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/payment">
            <Paymant />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Feed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
