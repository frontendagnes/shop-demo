import React, { useState, useEffect } from "react";
import "./Orders.css";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Order from "../Order/Order";
import db from "../../app/utility/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";

function Orders() {
  const user = useSelector(selectUser);

  const [orders, setOrders] = useState([]);

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
    <div className="orders">
      <div className="orders__top">
        <h3>Hello, {user?.displayName}</h3>
        <h2>
          Your orders are listed below
          <ArrowDownwardIcon fontSize="large" color="secondary" />
        </h2>
      </div>

      {orders?.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
}

export default Orders;
