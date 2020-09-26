import React from "react";
import "./MembersTable.scss";

function MembersTable({ data, metadata }) {
  console.log("data::::", data);
  const { members } = data;
  const { headers } = metadata;

  if (!members) return <div>Loading...</div>;

  return (
    <div className="tableContainer">
      <table>
        <tbody>
          <tr className="header">
            {headers && headers.map((header) => <th key={header}>{header}</th>)}
          </tr>
          {members &&
            members.map((member) => (
              <tr key={member.id} className="row">
                <td>{member.title}</td>
                <td>{member.first_name}</td>
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
