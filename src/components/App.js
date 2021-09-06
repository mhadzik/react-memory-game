import React from "react";
import LandingPage from "./LandingPage";
import GamePage from "./GamePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SummaryPage from "./SummaryPage";
import Footer from "./Footer";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/game">
            <GamePage />
            <Footer />
          </Route>
          <Route path="/summary">
            <SummaryPage />
            <Footer />
          </Route>
          <Route path="/">
            <LandingPage />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
