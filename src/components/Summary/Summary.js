import React from "react";
import "./Summary.css";

import { useSelector } from "react-redux";
import {
  selectBasket,
  getBasketTotal,
} from "../../features/basket/baksetSlice";

function Summary({ isButton }) {
  const basket = useSelector(selectBasket);

  return (
    <div className="summary">
      <div>Summary: {getBasketTotal(basket)} PLN</div>
      {!isButton && <button>Cash register</button>}
    </div>
  );
}

export default Summary;
