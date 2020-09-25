import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MembersTable from "./components/MembersTable/MembersTable";
import Footer from "./components/Footer/Footer";

const metadata = {
  headers: ["title", "first_name", "last_name", "party", "gender"],
};

const data = {
  members: [
    {
      id: "A000360",
      title: "Senator, 2nd Class",
      first_name: "Lamar",
      last_name: "Alexander",
      gender: "M",
      party: "R",
    },
    {
      id: "B001230",
      title: "Senator, 1st Class",
      first_name: "Tammy",
      last_name: "Baldwin",
      gender: "F",
      party: "D",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MembersTable data={data} metadata={metadata} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
