import React, { useState } from "react";
import "./List.scss";
import SearchPanel from "../SearchPanel/SearchPanel";
import MembersTable from "../MembersTable/MembersTable";
//import mockedData from "../../api";
import useMembers from "../../hooks/useMembers";

function List() {
  let { loading, data: members } = useMembers();
  //const members = mockedData.members;

  const [term, setTerm] = useState("");
  const [advancedSearchActive, setAdvancedSearchActive] = useState(false);

  const mapParty = {
    R: "Republican",
    D: "Democrat",
    ID: "Independent",
  };

  const mapGender = {
    M: "Male",
    F: "Female",
  };

  const dataTable = {
    headers: {
      name: {
        label: "Name",
        filterType: "string",
      },
      title: {
        label: "Title",
        filterType: "string",
      },
      party: {
        label: "Party",
        filterType: "select",
        filterOptions: Object.values(mapParty),
      },
      gender: {
        label: "Gender",
        filterType: "select",
        filterOptions: Object.values(mapGender),
      },
    },
    rows: members.map((member) => ({
      _id: member.id,
      _url: `/members/${member.id}`,
      _meta: member,
      name: `${member.first_name} ${member.last_name}`,
      title: member.title,
      party: mapParty[member.party],
      gender: mapGender[member.gender],
    })),
  };

  const onHandleTermSearch = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  const onHandleCheck = (e) => {
    setAdvancedSearchActive(e.target.checked);
  };

  return (
    <div className="List-container">
      <SearchPanel
        term={term}
        handleUpdate={onHandleTermSearch}
        isChecked={advancedSearchActive}
        handleCheck={onHandleCheck}
      />
      {loading ? (
        "Loading members..."
      ) : (
        <MembersTable
          data={dataTable}
          filterData={term}
          showFilterByColumns={advancedSearchActive}
        />
      )}
    </div>
  );
}

export default List;
