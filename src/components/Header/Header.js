import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="headerContainer">
      <img
        className="headerContainer__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Seal_of_the_United_States_Congress.svg"
        alt="logo"
      />
      <h1 className="headerContainer__title">Congress app</h1>
    </header>
  );
}

export default Header;
