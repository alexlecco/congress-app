import React from "react";
import "./SearchPanel.scss";

function SearchPanel() {
  return (
    <div className="searchPanelContainer">
      <div className="search">
        <div className="search__label">Search</div>
        <input className="search__input" type="text" />
      </div>
    </div>
  );
}

export default SearchPanel;
