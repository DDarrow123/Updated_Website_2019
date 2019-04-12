import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <>
        <header className="row">
          <div className="row__my-name">
            <h3>
              Devon <span>Darrow</span>
            </h3>
          </div>
          <div className="row__contact">Contact</div>
        </header>
      </>
    );
  }
}

export default NavBar;
