import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about-para">
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
