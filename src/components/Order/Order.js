import React from "react";
import "./Order.css";
import moment from "moment";

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Order({ order }) {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="order">
      <div className="order__top">
        <span><span className="order__idNumber">{order.id}</span></span>
        <span>Created: <small>{moment.unix(order.data.created).format(`MMMM Do ${year} h:mma`) }</small></span>
      </div>

      <div className="order__middle">
        {order.data?.basket.map((item, index) => (
          <CheckoutProduct
            key={index}
            id={item.id}
            title={item.title}
            picphoto={item.picphoto}
            price={item.price}
            isCheckout
          />
        ))}
      </div>
      <div className="order__bottom">
          <span>Summary: {order.data.amount}</span>
      </div>
    </div>
  );
}

export default Order;
