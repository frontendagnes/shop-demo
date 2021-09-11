import React from "react";
import "./Footer.css";
import logoLight from "../../assets/logo-white.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <div className="footer__left">
          <img src={logoLight} alt="" />
        </div>
      </Link>
      <div className="footer__right">by Agnieszka Kamińska</div>
    </div>
  );
}

export default Footer;
