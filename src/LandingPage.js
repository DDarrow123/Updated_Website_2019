import React, { Component } from "react";
import NavBar from "./NavBar";
import Elements from "./Elements";
import About from "./About";
import Work from "./Work";

class LandingPage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Elements />
        <About />
        <Work />
      </>
    );
  }
}

export default LandingPage;
