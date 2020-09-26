import React, { useState } from "react";
import "./MembersTable.scss";

function MembersTable({ data, metadata, loading }) {
  const [isAdvanced, setIsAdvanced] = useState(false);
  const { headers } = metadata;

  if (loading) return <div>Loading members...</div>;

  return (
    <div className="tableContainer">
      <table>
        <tbody>
          <tr className="header">
            {headers &&
              headers.map((header) => (
                <th key={header}>
                  <input type="text" />
                  <br />
                  {header}
                </th>
              ))}
          </tr>
          {data &&
            data.map((member) => (
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
