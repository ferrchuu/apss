import React, { useEffect } from "react";
import "./App.css";
import "bootstrap";
import ReactGA from "react-ga";
import Home from "./pages";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-214476434-1");
    ReactGA.pageview("/");
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
