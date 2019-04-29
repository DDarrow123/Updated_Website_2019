import React, { Component } from "react";
import gallery_site from "./images/gallery_site.png";

class Work extends Component {
  state = {
    hover: null
  };
  activateScroll = () => {
    window.scroll({
      top: 2600,
      behavior: "smooth"
    });
  };

  renderProjectTitle = e => {
    if (e.target.className === "work-1") {
      this.setState(
        {
          hover: true
        },
        () => console.log("hello!")
      );
    } else if (e.target.className === "work-2") {
    }

    // this.setState(
    //   {
    //     hover: true
    //   },
    //   () => console.log("hello!")
    // );
  };

  hideProjectTitle = () => {
    this.setState(
      {
        hover: false
      },
      () => console.log("goodbye!")
    );
  };
  render() {
    return (
      <div onMouseEnter={this.activateScroll} className="work-container">
        <div className="work-container__work-title">
          SELECTED <br /> WORK
        </div>
        <div className="work-container__project-container">
          <div
            className="work-1"
            onMouseLeave={this.hideProjectTitle}
            onMouseEnter={this.renderProjectTitle}
          >
            {this.state.hover ? (
              <h5 className="hover-title">Gallery Project</h5>
            ) : (
              <img src={gallery_site} />
            )}
          </div>
          <div
            className="work-2"
            onMouseEnter={() => this.renderProjectTitle()}
            onMouseLeave={() => this.hideProjectTitle()}
          >
            {this.state.hover ? <h5 className="hover-title">Test 2</h5> : null}
          </div>
          <div className="work-3">Gallery Site</div>
        </div>
      </div>
    );
  }
}

export default Work;
