import React from "react";
import "./Header.css";

import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { selectBasket } from "../../features/basket/baksetSlice";
import logoLight from "../../assets/logo-white.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { auth, signOut } from "../../app/utility/firebase";

function Header() {
  const user = useSelector(selectUser);
  const basket = useSelector(selectBasket);
  const history = useNavigate();
  const onHandleLogout = () => {
    if (user) {
      signOut(auth)
        .then(() => history("/"))
        .catch((error) => console.log("Sign Out error>>", error.message));
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__image">
          <Link to="/">
            <img src={logoLight} alt="LOGO" className="header__logo" />
          </Link>
        </div>
        <div className="header__options">
          <div className="header__option" onClick={user && onHandleLogout}>
            <small className="header__optionOne">
              Hello, {user ? user.displayName : "Guest"}
            </small>
            <span className="header__optionTwo">
              {user ? "Logout" : <Link to="/login">Login</Link>}
            </span>
          </div>
          <Link to="/orders">
            {user && (
              <div className="header__option">
                <small>Your orders</small>
              </div>
            )}
          </Link>
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
