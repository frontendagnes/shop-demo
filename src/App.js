import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
        <Route path="/login">
            <Login />
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
