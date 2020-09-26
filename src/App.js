import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //useParams,
} from "react-router-dom";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import MemberDetails from "./components/MemberDetails/MemberDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Switch>
            <Route exact path="/">
              <List />
            </Route>
            <Route path="/members/:id" component={MemberDetails}></Route>
          </Switch>
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
