import React from "react";
import "./SearchPanel.scss";

function SearchPanel({ term, handleUpdate, isChecked, handleCheck }) {
  return (
    <div className="searchPanelContainer">
      <div className="search">
        <div className="search__left">
          <div className="search__left-label">Search</div>
          <input
            className="search__left-input"
            type="text"
            value={term}
            onChange={handleUpdate}
          />
        </div>
        <div className="search__right">
          <div className="switchContainer">
            <p className="switchLabel">Advanced Search</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheck}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
