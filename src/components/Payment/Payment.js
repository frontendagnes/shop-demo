import React, { useState } from "react";
import "./Payment.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

import TextField from '@mui/material/TextField'
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import {
  selectBasket,
  getBasketTotal,
  emptyBasket
} from "../../features/basket/baksetSlice";
import db from '../../app/utility/firebase'
import { nanoid } from "nanoid"
import firebase from "firebase";

function Paymant() {
  const user = useSelector(selectUser);
  const basket = useSelector(selectBasket);

  const dispatch = useDispatch()
  const history = useNavigate()
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [deliveryAdress, setDeliveryAdress] = useState(null);

  const index = () => {
    return `Order-${nanoid(10)}`
  }

  const onHandleSaveAdress = () => {
    if(street && town){
    setDeliveryAdress({
      name: user?.displayName,
      email: user?.email,
      street: street,
      town: town,
    });
  }else {alert("Enter Delivery Adress")}
  };

  const onHandleEditAdress = () => {
    setDeliveryAdress(null);
  };

  const onHandleOrder = (e) => {
    e.preventDefault()
    if(!deliveryAdress){
      alert("Confirm the address")
      return
    }
    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc(index())
      .set({
        user: deliveryAdress,
        basket: basket,
        amount: getBasketTotal(basket),
        created: firebase.firestore.FieldValue.serverTimestamp(),
      })

      dispatch(emptyBasket())
      history("/orders")
  };
  return (
    <div className="payment">
      <div className="payment__heading">
        <h1>There are {basket.length} items in your cart</h1>
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Adress:</h3>
        </div>
        <div className="payment__adress">
          <div>{user?.displayName}</div>
          <div>{user?.email}</div>
          <div>
            {deliveryAdress ? (
              <span>{street}</span>
            ) : (
              <TextField
                className="payment__input"
                id="standard-multiline-flexible"
                label="Adress"
                multiline
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            )}
          </div>
          <div>
            {deliveryAdress ? (
              <span>{town}</span>
            ) : (
              <TextField
                className="payment__input"
                id="standard-multiline-flexible"
                label="Zip-Code and Town"
                multiline
                value={town}
                onChange={(e) => setTown(e.target.value)}
              />
            )}
          </div>
        </div>
        {!deliveryAdress && (
          <button onClick={onHandleSaveAdress}>Save Adress</button>
        )}
        {deliveryAdress && (
          <button onClick={onHandleEditAdress}>Edit adress</button>
        )}
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Poducts:</h3>
        </div>
        <div className="payment__items">
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
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Payment: </h3>
        </div>
        <div className="payment__summary">
          <span>Summary {getBasketTotal(basket)} PLN</span>
          <button onClick={onHandleOrder} disabled={basket.length === 0 || !user ? true : false}>Buy now</button>
        </div>
      </div>
    </div>
  );
}

export default Paymant;
