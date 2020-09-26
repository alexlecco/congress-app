import React from "react";
import "./SearchPanel.scss";

function SearchPanel({ term, handleUpdate, isChecked, handleCheck }) {
  return (
    <div className="searchPanelContainer">
      <div className="search">
        <div className="search__label">Search</div>
        <input
          className="search__input"
          type="text"
          value={term}
          onChange={handleUpdate}
        />
        <div className="switchContainer">
          <p className="switchLabel">Advanced Search</p>
          <label className="switch">
            <input type="checkbox" checked={isChecked} onClick={handleCheck} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
