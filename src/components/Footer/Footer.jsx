import "./Footer.css";
import logoLight from "../../assets/logo-white.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <div className="footer__left">
          <img src={logoLight} alt="Logo" title="Logo" />
        </div>
      </Link>
      <div className="footer__right">
        by{" "}
        <a
          href="https://frontend-agnes.web.app"
          alt="frontend-agens"
          title="frontend-agens"
        >
          frontend-agens
        </a>
      </div>
    </div>
  );
}

export default Footer;
