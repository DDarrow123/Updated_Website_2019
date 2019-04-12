import React, { Component } from "react";
import gallery_site from "./images/gallery_site.png";

class Work extends Component {
  activateScroll = () => {
    window.scroll({
      top: 2700,
      behavior: "smooth"
    });
  };
  render() {
    return (
      <div onMouseEnter={this.activateScroll} className="work-container">
        <div className="work-container__work-title">
          SELECTED <br /> WORK
        </div>
        <div className="work-container__project-container">
          <div className="work-1">
            <img src={gallery_site} />
          </div>
          <div className="work-2">Gallery Site</div>
          <div className="work-3">Gallery Site</div>
        </div>
      </div>
    );
  }
}

export default Work;
