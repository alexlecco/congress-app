import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MembersTable.scss";

const MembersTable = ({ data, filterData, showFilterByColumns = false }) => {
  const [filterByColumn, setFilterByColumn] = useState({});

  const renderHeader = () => {
    let headerNames = Object.keys(data.headers);

    return (
      <thead>
        <tr className="header">
          {headerNames.map((header) => (
            <th key={header} className="header__cell">
              <div className="header__cell-style">
                {getHeaderTitle(data.headers[header].label)}
                {showFilterByColumns &&
                  renderColumnFilter(header, data.headers[header])}
              </div>
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const getHeaderTitle = (header) =>
    showFilterByColumns ? `filter by ${header}` : header;

  const renderColumnFilter = (name, headerData) => {
    switch (headerData.filterType) {
      case "select":
        return (
          <select
            name={name}
            value={filterByColumn[name] || ""}
            onChange={handleFilterColumn}
          >
            <option></option>
            {headerData.filterOptions.map((option) => {
              return <option key={option}>{option}</option>;
            })}
          </select>
        );
      default:
        return (
          <input
            autoComplete="off"
            name={name}
            value={filterByColumn[name] || ""}
            onChange={handleFilterColumn}
            type="search"
          />
        );
    }
  };

  const handleFilterColumn = (e) => {
    let value = {};
    value[e.target.name] = e.target.value;
    setFilterByColumn({ ...filterByColumn, ...value });
  };

  const renderRows = () => (
    <tbody>
      {filteredData().map((row) => {
        let headerNames = Object.keys(row);
        let ignoreColumnNames = ["_id", "_url", "_meta"];

        return (
          <tr key={row._id} className="row">
            {headerNames.map((cellKey) => {
              return !ignoreColumnNames.includes(cellKey) ? (
                <td key={`${row._id}-${cellKey}`}>
                  <Link
                    to={{
                      pathname: `/members/${row._id}`,
                      state: { member: row._meta },
                    }}
                  >
                    {row[cellKey]}
                  </Link>
                </td>
              ) : null;
            })}
          </tr>
        );
      })}
    </tbody>
  );

  const filteredData = () => {
    return data.rows.filter((row) => {
      let rowToString = Object.values(row).join("").toLowerCase();
      let globalCondition =
        filterData !== null && rowToString.includes(filterData.toLowerCase());
      let columnCondition = Object.keys(filterByColumn).map((colName) => {
        if (
          filterByColumn[colName] &&
          row[colName] &&
          filterColumn(
            data.headers[colName].filterType,
            row[colName],
            filterByColumn[colName]
          )
        ) {
          return true;
        } else if (!filterByColumn[colName]) {
          // Cuando el usuario borra los valores
          return true;
        } else {
          // Se filtró por esta columna pero no hay match
          return false;
        }
      });

      // Devolver la data filtrada
      return (
        globalCondition &&
        columnCondition.reduce((a, b) => {
          return a && b;
        }, 1)
      );
    });
  };

  const filterColumn = (type, data, filterValue) => {
    switch (type) {
      case "select":
        return data === filterValue;
      default:
        return data.toLowerCase().includes(filterValue.toLowerCase());
    }
  };

  return (
    <div className="tableContainer">
      <table className="table">
        {renderHeader()}
        {renderRows()}
      </table>
    </div>
  );
};

export default MembersTable;
