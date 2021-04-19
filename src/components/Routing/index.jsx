import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import DetailPage from "pages/DetailPage";
import HomePage from "pages/HomePage";
import ProfilePage from "pages/ProfilePage";

export default function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/features/:id" component={DetailPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
