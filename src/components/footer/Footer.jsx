import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { CURRENT_YEAR } from "../../config";
function Footer() {
  return (
    <div className="footer">
      <Link to="/home" className="logo">
        <img src="/images/nba_logo.png" alt="" />
      </Link>
      <div className="right">
        @NBA {CURRENT_YEAR} All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
