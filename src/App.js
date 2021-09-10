import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import db, { auth } from "./app/utility/firebase";
import { login, logout, selectUser } from "./features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

//components
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Checkout from "./components/Checkout/Checkout";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Paymant from "./components/Payment/Payment";
import Orders from "./components/Orders/Orders";
import OrderDetails from "./components/OrderDetails/OrderDetails";
function App() {
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login(authUser));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else setOrders([]);
  }, [user])

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/orders">
            <Orders orders={orders}/>
          </Route>
          <Route path="/order-details/:id">
            <OrderDetails orders={orders}/>
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
