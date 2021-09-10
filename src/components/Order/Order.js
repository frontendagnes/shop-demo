import React from "react";
import "./Order.css";
import moment from "moment";
import { Link } from "react-router-dom";

function Order({ order }) {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <li className="order">
      <div className="order__top">
        <Link to={`/order-details/${order.id}`}>
          <span className="order__idNumber">{order.id}</span>
        </Link>
        <span>
          <span>Created:</span>
          <small>
            {moment.unix(order.data.created).format(`MMMM Do ${year} h:mma`)}
          </small>
        </span>
      </div>
      <div className="order__bottom">
        <span>Summary: {order.data.amount}</span>
      </div>
    </li>
  );
}

export default Order;
