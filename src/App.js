import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "pages/login";
import Main from "pages/main";

import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
