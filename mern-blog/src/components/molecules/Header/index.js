import React from "react";
import "./header.scss";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <a className="logo-app" href="/">
        Mern-Blog
      </a>
      <p className="menu-item" onClick={() => history.push("/login")}>
        Logout
      </p>
    </div>
  );
};

export default Header;
