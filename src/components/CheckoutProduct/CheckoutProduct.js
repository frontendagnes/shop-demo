import React from "react";
import "./CheckoutProduct.css";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../features/basket/baksetSlice";
function CheckoutProduct({ id, title, picphoto, price, isCheckout }) {
    const dispatch = useDispatch()

    const onHandleRemoveFromBasket = () =>{
        dispatch(removeFromBasket(id))
    }
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__picPhoto"
        src={picphoto}
        title={title}
        alt={title}
      />
      <div className="checkoutProduct__bottom">
        <div className="checkoutProduct__title">{title}</div>
        <div className="checkoutProduct__price">Price: {price}</div>
        {!isCheckout &&
        <button className="checkoutProduct__button" onClick={onHandleRemoveFromBasket}>Remove From Basket</button>
        }
        
      </div>
    </div>
  );
}

export default CheckoutProduct;
