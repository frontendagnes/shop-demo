import React from "react";
import "./Summary.css";

import { Link } from 'react-router-dom'
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
      {!isButton && <Link to="/payment"><button>Cash register</button></Link>}
    </div>
  );
}

export default Summary;
