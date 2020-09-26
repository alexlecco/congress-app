import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import List from "./components/Main/List";
import Footer from "./components/Footer/Footer";
//import useMembers from "./hooks/useMembers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header />
          <Switch>
            <Route path="/">
              <List />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
