import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import SideNav from "./Sidenav/Sidenav";

export default function Header(props) {
  const logo = () => (
    <Link to="/" className="logo">
      <img src="/images/nba_logo.png" alt="" />
    </Link>
  );

  const navBars = () => (
    <div className="bars">
      <FontAwesome
        name="bars"
        onClick={props.onOpenNav}
        style={{
          color: "#dfdfdf",
          padding: "10px",
          cursor: "pointer",
        }}
      />
    </div>
  );
  return (
    <header className="header">
      <div className="headerOpts">
        <SideNav {...props} />
        {navBars()}
        {logo()}
      </div>
    </header>
  );
}
