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
import NoMatch from "./components/NoMatch/NoMatch";
import Footer from "./components/Footer/Footer";
function App() {
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
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
  }, [user]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/orders">
            <Header />
            <Orders orders={orders} />
            <Footer />
          </Route>
          <Route exact path="/order-details/:orderId">
            <Header />
            <OrderDetails orders={orders} />
            <Footer />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Paymant />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route exact path="/">
            <Header />
            <Feed />
            <Footer />
          </Route>
          <Route>
            <Header />
            <NoMatch />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
