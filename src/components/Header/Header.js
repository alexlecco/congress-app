import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="headerContainer">
      <img
        className="headerContainer__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Seal_of_the_United_States_Congress.svg"
        alt="logo"
      />
      <h4 className="headerContainer__title">Congress app</h4>
    </div>
  );
}

export default Header;
