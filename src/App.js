import React, { useEffect, useState, Suspense } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import db, {
  auth,
  onAuthStateChanged,
  onSnapshot,
  collection,
  doc,
  orderBy,
  query,
} from "./app/utility/firebase";
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

//mui
import { CircularProgress } from "@mui/material";

function App() {
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(login(authUser));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      const ref = collection(docRef, "orders");
      const sortRef = query(ref, orderBy("created", "desc"));

      const unsuscribe = onSnapshot(sortRef, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
      return () => {
        unsuscribe();
      };
    }
  }, [user]);

  const renderLoader = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <CircularProgress color="success" />
      <span
        style={{
          marginLeft: "10px",
          letterSpacing: "3px",
        }}
      >
        Loading...
      </span>
    </div>
  );
  return (
    <div className="app">
      <Suspense fallback={renderLoader()}>
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders orders={orders} />
                <Footer />
              </>
            }
          />
          <Route
            path="/order-details/:orderId"
            element={
              <>
                <Header />
                <OrderDetails orders={orders} />
                <Footer />
              </>
            }
          />

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Paymant />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Feed />
                <Footer />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <NoMatch />
                <Footer />
              </>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
