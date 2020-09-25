import React from "react";
import "./MembersTable.scss";

function MembersTable({ data, metadata }) {
  const { members } = data;
  const { headers } = metadata;

  return (
    <div>
      <table>
        <tbody>
          <tr className="header">
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
          {members.map((member) => (
            <tr className="row">
              <td>{member.title}</td>
              <td>{member.first_name}</td>
              <td>{member.last_name}</td>
              <td>{member.gender}</td>
              <td>{member.party}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MembersTable;
