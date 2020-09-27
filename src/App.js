import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import MemberDetails from "./components/MemberDetails/MemberDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/members/:id" component={MemberDetails}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
