import React from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as Logo } from "../../assets/crown.svg";
import Logo from "../logo/logo";
import { auth } from "../../firebase/firebase.utils";
import "./header.scss";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;