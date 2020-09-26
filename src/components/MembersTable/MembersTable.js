import React from "react";
import { Link } from "react-router-dom";
import "./MembersTable.scss";

function MembersTable({
  data,
  metadata,
  loading,
  showAdvancedFields,
  byTitleTerm,
  byFirstNameTerm,
  byLastNameTerm,
  byPartyTerm,
  byGenderTerm,
  handleUpdateTitle,
  handleUpdateFirstName,
  handleUpdateLastName,
  handleUpdateParty,
  handleUpdateGender,
}) {
  const { headers } = metadata;

  if (loading) return <div>Loading members...</div>;

  const getTermValue = (header) => {
    return header === "title"
      ? byTitleTerm
      : header === "first name"
      ? byFirstNameTerm
      : header === "last name"
      ? byLastNameTerm
      : header === "party"
      ? byPartyTerm
      : byGenderTerm;
  };

  const getFilterFunction = (header) => {
    return header === "title"
      ? handleUpdateTitle
      : header === "first name"
      ? handleUpdateFirstName
      : header === "last name"
      ? handleUpdateLastName
      : header === "party"
      ? handleUpdateParty
      : handleUpdateGender;
  };

  return (
    <div className="tableContainer">
      <table>
        <tbody>
          <tr className="header">
            {headers &&
              headers.map((header) => (
                <th key={header}>
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
                  {header}
                </th>
              ))}
          </tr>
          {data &&
            data.map((member) => (
              <tr key={member.id} className="row">
                <td>{member.title}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/members/${member.id}`,
                      state: { member },
                    }}
                  >
                    {member.first_name}
                  </Link>
                </td>
                <td>{member.last_name}</td>
                <td>{member.party}</td>
                <td>{member.gender}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MembersTable;
