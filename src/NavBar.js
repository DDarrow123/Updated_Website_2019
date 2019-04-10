import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <>
        <header className="App-header">
          <p>Test here for Heroku!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          />
        </header>
        <div>Main Page</div>
      </>
    );
  }
}

export default NavBar;
