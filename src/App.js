import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel
          destination="Bangkok"
          country="Thailand"
          image="https://www.connections.be/~/media/images/connections/vliegtickets/asia/bangkok/bangkokstreets.jpg"
	  distance="3000km"
        />
        <Travel
          destination="London"
          country="England"
          image="https://cdn.londonandpartners.com/-/media/images/london/visit/london-organisations/tower-bridge-exhibition/tower-bridge-homepage-image.jpg?mw=1920&hash=E19E0136A57855A8ED61B4E66EA72F1646CA8DAC"
	  distance="300km"
        />
      </div>
    );
  }
}

export default App;
