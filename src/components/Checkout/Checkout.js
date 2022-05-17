import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import { selectBasket } from "../../features/basket/baksetSlice";
import { selectUser } from "../../features/user/userSlice";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

import Summary from "../Summary/Summary";

function Checkout() {
  const basket = useSelector(selectBasket);
  const user = useSelector(selectUser);

  return (
    <div className="checkout">
      <div className="checkout__top">
        <h3>Hello, {user ? user.displayName : "Guest"}</h3>
        <h2>
          {basket.length === 0
            ? "Your shopping cart is empty"
            : `There are ${basket.length} items in your basket`}
        </h2>
      </div>
      {basket.length !== 0 ? <Summary hideButton/> : null}
      <div className="chekout__products">
        {basket.map((item, index) => (
          <CheckoutProduct
            key={index}
            id={item.id}
            title={item.title}
            picphoto={item.picphoto}
            price={item.price}
          />
        ))}
      </div>
      {basket.length !== 0 ? <Summary /> : null}
    </div>
  );
}

export default Checkout;
