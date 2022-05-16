import React from "react";
import "./Orders.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Order from "../Order/Order";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
function Orders({ orders }) {
  const user = useSelector(selectUser);

  return (
    <div className="orders">
      <div className="orders__top">
      <h3>Hello, {user?.displayName}</h3>
          <h2>
            Your orders are listed below
            <ArrowDownwardIcon fontSize="large" color="secondary" />
          </h2>
      </div>
      <ul>
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </ul>
    </div>
  );
}

export default Orders;
