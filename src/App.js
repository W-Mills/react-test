import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Home } from "./pages/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
