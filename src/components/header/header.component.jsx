import React from "react";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logoimage"></div>
      </div>
      <div className="pages">
        <div className="page">HOME</div>
        <div className="page">SHOP</div>
        <div className="page">ABOUT</div>
        <div className="page">CONTACT</div>
      </div>
      <div className="signin">
        <div>LOG IN/REGISTER</div>
      </div>
    </div>
  );
};

export default Header;
