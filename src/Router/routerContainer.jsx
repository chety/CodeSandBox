import React from "react";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export function RouterContainer() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}
