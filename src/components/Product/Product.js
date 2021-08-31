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
      <div className="product__title">{title}</div>
      <img
        className="product__picPhoto"
        src={picphoto}
        title={title}
        alt={title}
      ></img>
      <div className="product__price">Price: {price}</div>
      <button className="product__button" onClick={onHandleAddToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
