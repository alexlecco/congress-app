import React from "react";
import { Link } from "react-router-dom";
import "./MembersTable.scss";

function MembersTable({
  data,
  metadata,
  loading,
  showAdvancedFields,
  byTitleTerm,
  byNameTerm,
  byPartyTerm,
  byGenderTerm,
  handleUpdateTitle,
  handleUpdateName,
  handleUpdateParty,
  handleUpdateGender,
}) {
  const { headers } = metadata;

  if (loading) return <div>Loading members...</div>;

  const getTermValue = (header) => {
    return header === "title"
      ? byTitleTerm
      : header === "name"
      ? byNameTerm
      : header === "party"
      ? byPartyTerm
      : byGenderTerm;
  };

  const getFilterFunction = (header) => {
    return header === "title"
      ? handleUpdateTitle
      : header === "name"
      ? handleUpdateName
      : header === "party"
      ? handleUpdateParty
      : handleUpdateGender;
  };

  const getHeaderTitle = (header) =>
    showAdvancedFields ? `filter by ${header}` : header;

  const buildTableHeader = () => (
    <tr className="header">
      {headers &&
        headers.map((header) => (
          <th className="header__cell" key={header}>
            {showAdvancedFields && (
              <>
                <input
                  type="text"
                  value={getTermValue(header)}
                  onChange={getFilterFunction(header)}
                />
                <br />
              </>
            )}
            {getHeaderTitle(header)}
          </th>
        ))}
    </tr>
  );

  const buildTableBody = () =>
    data &&
    data.map((member) => (
      <tr key={member.id} className="row">
        <td>
          <Link
            to={{
              pathname: `/members/${member.id}`,
              state: { member },
            }}
          >
            {`${member.first_name} ${member.last_name}`}
          </Link>
        </td>
        <td>{member.title}</td>
        <td>{member.party}</td>
        <td>{member.gender}</td>
      </tr>
    ));

  return (
    <div className="tableContainer">
      <table className="table">
        <tbody>
          {buildTableHeader()}
          {buildTableBody()}
        </tbody>
      </table>
    </div>
  );
}

export default MembersTable;
