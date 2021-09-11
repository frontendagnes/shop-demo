import React from "react";
import "./OrderDetails.css";
import { useParams } from "react-router-dom";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
function OrderDetails({ orders }) {
  let { orderId } = useParams();

  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="orderDetails">
      <h2>Order preview</h2>
      {orders
        .filter((item) => item.id === orderId)
        .map((item) => (
          <div className="orderDetails__container">
            <div className="orderDetails__top">
              <span className="orderDetails__idNumber">{item.id}</span>
              <span>
                <span>Created:</span>
                <small>
                  {moment
                    .unix(item.data.created)
                    .format(`MMMM Do ${year} h:mma`)}
                </small>
              </span>
            </div>

            <div className="orderDetails__middle">
              {item.data?.basket.map((item, index) => (
                <CheckoutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  picphoto={item.picphoto}
                  price={item.price}
                  hideButton
                />
              ))}
            </div>
            <div className="orderDetails__bottom">
              <div className="orderDetails__adressDelivery">
                <h5>Delivery address for this order:</h5>
                <p>{item.data.user?.name}</p>
                <p>{item.data.user?.street}</p>
                <p>{item.data.user?.town}</p>
                <p>{item.data.user?.email}</p>
              </div>
              <div className="orderDetails__summary">
                Summary: {item.data.amount}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default OrderDetails;
