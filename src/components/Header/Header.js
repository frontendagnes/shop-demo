import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "../../features/user/userSlice";
import { selectBasket } from "../../features/basket/baksetSlice";
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
      <Link to="/">
        <div className="header__logo"> LOGO </div>
      </Link>
      <div className="header__options">
        <div className="header__option">Hello, {user ? user : "Guest"}</div>
        <Link to="/checkout">
          <div className="header__option">
            Basket <span>({basket.length})</span>
          </div>
        </Link>
        <div
          className="header__option"
          onClick={user ? onHandleLogout : onHandleLogin}
        >
          {user ? "Logout" : "Login"}
        </div>
      </div>
    </div>
  );
}

export default Header;
