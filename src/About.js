import React, { Component } from "react";
import {
  DiReact,
  DiJavascript1,
  DiCss3,
  DiStackoverflow,
  DiSass
} from "react-icons/di";
import { IconContext } from "react-icons";
import { FaRegHeart } from "react-icons/fa";

class About extends Component {
  render() {
    return (
      <div className="about-para">
        <h5 className="about-para__about-title">About</h5>
        <p className="about-para__about-description">
          After working in the fashion industry for three years, and gaining
          exposure to the ecommerce side of a large luxury retailer, I became
          more and more interested in how a beautiful ecommerce website is
          actually built. After graduating from the software engineering
          immersive program at the Flatiron School, I knew I wanted to pursue
          web development with a focus on the frontend crafting beautiful user
          interfaces with focused design aesthetics. Currently, I'm diving into
          UX design, responsive design, CSS libraries, and going deep (black
          hole style) into React and JavaScript. May I never touch bottom.
        </p>
        <div className="about-para__tech">
          <div className="heart-title">
            Favorite <FaRegHeart className="heart-icon" /> Languages -
            Technologies - Frameworks
          </div>
          <IconContext.Provider
            value={{ color: "#8C131D", className: "react-icon", size: 70 }}
          >
            <div>
              <DiReact />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "#260007", className: "react-icon", size: 70 }}
          >
            <div>
              <DiJavascript1 />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "#213F59", className: "react-icon", size: 70 }}
          >
            <div>
              <DiCss3 />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "#F21515", className: "react-icon", size: 70 }}
          >
            <div>
              <DiStackoverflow />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "#F22E2E", className: "react-icon", size: 70 }}
          >
            <div>
              <DiSass />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}

export default About;
