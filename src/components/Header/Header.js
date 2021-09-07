import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "../../features/user/userSlice";
import { selectBasket } from "../../features/basket/baksetSlice";
import logoLight from "../../assets/logo-white.png";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  const onHandleLogin = () => {
    dispatch(login());
  };
  const onHandleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <img src={logoLight} alt="LOGO" className="header__logo" />
        </Link>
        <div className="header__options">
          <div
            className="header__option"
            onClick={user ? onHandleLogout : onHandleLogin}
          >
            <small className="header__optionOne">
              Hello, {user ? user.displayName : "Guest"}
            </small>
            <span className="header__optionTwo">
              {user ? "Logout" : <Link to="/login" >Login</Link>}
            </span>
          </div>
          {user && 
          <div className="header__option">
            <small>Your orders</small>
          </div>
          }
          <Link to="/checkout">
            <div className="header__option">
              <ShoppingBasketIcon fontSize="large" />
              <span className="header__basket">{basket.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
