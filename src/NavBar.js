import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <>
        <header className="row">
          <div className="row__my-name">
            <h3>
              DEVON <span>DARROW</span>
            </h3>
          </div>
          <div className="row__contact">Contact</div>
        </header>
      </>
    );
  }
}

export default NavBar;
