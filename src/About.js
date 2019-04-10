import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about-para">
        <h5 className="about-para__about-title">About</h5>
        <p className="about-para__about-description">
          Here is a description about me!
        </p>
        <div className="about-para__tech">
          Favorite Languages and Technologies go here
        </div>
      </div>
    );
  }
}

export default About;
