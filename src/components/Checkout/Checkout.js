import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import { selectBasket } from "../../features/basket/baksetSlice";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

import Summary from "../Summary/Summary";

function Checkout() {
  const basket = useSelector(selectBasket);

  return (
    <div className="checkout">
      <h2>Number of items in the cart - {basket.length}</h2>
      <Summary isButton />
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
      <Summary />
    </div>
  );
}

export default Checkout;
