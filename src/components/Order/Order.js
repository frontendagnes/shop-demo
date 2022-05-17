import React from "react";
import "./Order.css";
import { Link } from "react-router-dom";

function Order({ order }) {
  return (
    <li className="order">
      <div className="order__top">
        <Link to={`/order-details/${order.id}`}>
          <span className="order__idNumber">{order.id}</span>
        </Link>
        <span>{new Date(order.data?.created?.seconds * 1000).toLocaleString("pl-PL")}</span>
      </div>
      <div className="order__bottom">
        <span>Summary: {order.data.amount}</span>
      </div>
    </li>
  );
}

export default Order;
