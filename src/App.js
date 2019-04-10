import React, { Component } from "react";
// import logo from "./logo.svg";
import "./stylesheets/App.scss";
import LandingPage from "./LandingPage";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <LandingPage />
      </div>
    );
  }
}

export default App;
