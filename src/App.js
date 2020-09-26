import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "./axios";
import Header from "./components/Header/Header";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import MembersTable from "./components/MembersTable/MembersTable";
import Footer from "./components/Footer/Footer";
import mockedData from "./api";

const metadata = {
  headers: ["title", "first_name", "last_name", "party", "gender"],
};

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchMembers() {
      axios
        .request({
          url: "https://api.propublica.org/congress/v1/116/senate/members.json",
          headers: { "X-API-Key": "xN4CkJlmc1wGqVJsgPM5fywbvqYygAVRvQCdKRMy" },
          method: "get",
        })
        .then((response) => {
          const members = response.data.results[0];
          setData(members);
        })
        .catch((error) => {
          console.log("ERROR: ", error);
        });
    }

    fetchMembers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchPanel />
        <MembersTable data={data} metadata={metadata} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
