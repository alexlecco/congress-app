import React, { useState, useEffect } from "react";
import "./List.scss";
import SearchPanel from "../SearchPanel/SearchPanel";
import MembersTable from "../MembersTable/MembersTable";
//import mockedData from "../../api";
import useMembers from "../../hooks/useMembers";

const metadata = {
  headers: ["title", "first name", "last name", "party", "gender"],
};

function List() {
  let { loading, data: members } = useMembers();
  //const members = mockedData.members;

  const [filteredData, setFilteredData] = useState([]);
  const [term, setTerm] = useState("");
  const [byTitleTerm, setByTitleTerm] = useState("");
  const [byFirstNameTerm, setByFirstNameTerm] = useState("");
  const [byLastNameTerm, setByLastNameTerm] = useState("");
  const [byPartyTerm, setByPartyTerm] = useState("");
  const [byGenderTerm, setByGenderTerm] = useState("");
  const [advancedSearchActive, setAdvancedSearchActive] = useState(false);

  const onHandleUpdate = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  const onHandleUpdateTitle = (e) => {
    e.preventDefault();
    setByTitleTerm(e.target.value);
  };

  const onHandleUpdateFirstName = (e) => {
    e.preventDefault();
    setByFirstNameTerm(e.target.value);
  };

  const onHandleUpdateLastName = (e) => {
    e.preventDefault();
    setByLastNameTerm(e.target.value);
  };

  const onHandleUpdateParty = (e) => {
    e.preventDefault();
    setByPartyTerm(e.target.value);
  };

  const onHandleUpdateGender = (e) => {
    e.preventDefault();
    setByGenderTerm(e.target.value);
  };

  useEffect(() => {
    const filterList = () => {
      if (term === "") return members;

      const filtered = members.filter((member) => {
        return (
          member.title.toLowerCase().includes(term.toLowerCase()) ||
          member.first_name.toLowerCase().includes(term.toLowerCase()) ||
          member.last_name.toLowerCase().includes(term.toLowerCase()) ||
          member.party.toLowerCase().includes(term.toLowerCase()) ||
          member.gender.toLowerCase().includes(term.toLowerCase())
        );
      });

      setFilteredData([...filtered]);
    };

    const filterListByTitle = () => {
      if (byTitleTerm === "") return members;

      const filtered = members.filter((member) => {
        return member.title.toLowerCase().includes(byTitleTerm.toLowerCase());
      });

      setFilteredData([...filtered]);
    };

    const filterListByFirstName = () => {
      if (byFirstNameTerm === "") return members;

      const filtered = members.filter((member) => {
        return member.first_name
          .toLowerCase()
          .includes(byFirstNameTerm.toLowerCase());
      });

      setFilteredData([...filtered]);
    };

    const filterListByLastName = () => {
      if (byLastNameTerm === "") return members;

      const filtered = members.filter((member) => {
        return member.last_name
          .toLowerCase()
          .includes(byLastNameTerm.toLowerCase());
      });

      setFilteredData([...filtered]);
    };

    const filterListByParty = () => {
      if (byPartyTerm === "") return members;

      const filtered = members.filter((member) => {
        return member.party.toLowerCase().includes(byPartyTerm.toLowerCase());
      });

      setFilteredData([...filtered]);
    };

    const filterListByGender = () => {
      if (byGenderTerm === "") return members;

      const filtered = members.filter((member) => {
        return member.gender.toLowerCase().includes(byGenderTerm.toLowerCase());
      });

      setFilteredData([...filtered]);
    };

    filterList();
    filterListByFirstName();
    filterListByTitle();
    filterListByLastName();
    filterListByParty();
    filterListByGender();

    if (
      term === "" &&
      byTitleTerm === "" &&
      byFirstNameTerm === "" &&
      byLastNameTerm === "" &&
      byPartyTerm === "" &&
      byGenderTerm === ""
    )
      setFilteredData([...members]);
  }, [
    term,
    members,
    byTitleTerm,
    byFirstNameTerm,
    byLastNameTerm,
    byPartyTerm,
    byGenderTerm,
  ]);

  const onHandleCheck = (prevAdvancedSearchActive) => {
    setAdvancedSearchActive(
      (prevAdvancedSearchActive) => !prevAdvancedSearchActive
    );
  };

  return (
    <div className="List-container">
      <SearchPanel
        term={term}
        handleUpdate={onHandleUpdate}
        isChecked={advancedSearchActive}
        handleCheck={onHandleCheck}
      />
      <MembersTable
        data={filteredData}
        metadata={metadata}
        loading={loading}
        showAdvancedFields={advancedSearchActive}
        byTitleTerm={byTitleTerm}
        byFirstNameTerm={byFirstNameTerm}
        byLastNameTerm={byLastNameTerm}
        byPartyTerm={byPartyTerm}
        byGenderTerm={byGenderTerm}
        handleUpdateTitle={onHandleUpdateTitle}
        handleUpdateFirstName={onHandleUpdateFirstName}
        handleUpdateLastName={onHandleUpdateLastName}
        handleUpdateParty={onHandleUpdateParty}
        handleUpdateGender={onHandleUpdateGender}
      />
    </div>
  );
}

export default List;
