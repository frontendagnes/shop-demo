import React from "react";
import "./Product.css";

import { useDispatch } from "react-redux";
import { addToBasket } from "../../features/basket/baksetSlice";
function Product({ id, title, picphoto, price }) {
  const dispatch = useDispatch();

  const onHandleAddToBasket = () => {
    dispatch(
      addToBasket({
        id,
        title,
        picphoto,
        price,
      })
    );
  };
  return (
    <div className="product">
      <div className="product__top">
        <div className="product__title">{title}</div>
        <div className="product__price">Price: <span>PLN {price}</span></div>
      </div>
      <img
        className="product__picPhoto"
        src={picphoto}
        title={title}
        alt={title}
      ></img>
      <button className="product__button" onClick={onHandleAddToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
