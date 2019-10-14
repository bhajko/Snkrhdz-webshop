import React from "react";
import logo from "../../assets/logo.png";
import "./logo.scss";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
};

export default Logo;
