import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <p>Congress App</p>
        <Footer />
      </header>
    </div>
  );
}

export default App;
