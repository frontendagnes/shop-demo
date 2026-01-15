import React from "react";
import "./NoMatch.css";

import { useLocation, Link } from "react-router-dom";
function NoMatch() {
  const location = useLocation();
  return (
    <div className="noMatch">
      <div className="noMatch__top">
        The entered address <span>{location.pathname}</span> does not exist
      </div>
      <div className="noMatch__bottom">
        <Link to="/"><button>Go to Home page</button></Link>
      </div>
    </div>
  );
}

export default NoMatch;
