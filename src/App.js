import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import MembersTable from "./components/MembersTable/MembersTable";
import Footer from "./components/Footer/Footer";
//import useMembers from "./hooks/useMembers";
import mockedData from "./api";

const metadata = {
  headers: ["title", "first name", "last name", "party", "gender"],
};

function App() {
  //let { loading, data: members } = useMembers();
  const members = mockedData.members;
  const [filteredData, setFilteredData] = useState([]);
  const [term, setTerm] = useState("");
  const [advancedSearchActive, setAdvancedSearchActive] = useState(false);

  const onHandleUpdate = (e) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    const filterList = () => {
      if (term === "" || term.length < 3) return members;

      return members.filter((member) => {
        return (
          member.title.toLowerCase().includes(term.toLowerCase()) ||
          member.first_name.toLowerCase().includes(term.toLowerCase()) ||
          member.last_name.toLowerCase().includes(term.toLowerCase()) ||
          member.party.toLowerCase().includes(term.toLowerCase()) ||
          member.gender.toLowerCase().includes(term.toLowerCase())
        );
      });
    };

    setFilteredData([...filterList()]);
  }, [term, members]);

  const onHandleCheck = (prevAdvancedSearchActive) => {
    setAdvancedSearchActive(
      (prevAdvancedSearchActive) => !prevAdvancedSearchActive
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchPanel
          term={term}
          handleUpdate={onHandleUpdate}
          isChecked={advancedSearchActive}
          handleCheck={onHandleCheck}
        />
        <MembersTable
          data={filteredData}
          metadata={metadata}
          loading={false}
          showAdvancedFields={advancedSearchActive}
        />
        <Footer />
      </header>
    </div>
  );
}

export default App;
