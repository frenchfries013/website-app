import React, { Component } from "react";
import "../index.css";

class Toolbar extends Component {
  render() {
    return (
      <div class="ui menu">
        <a class="header item" href="#home">
          Home
        </a>
        <a class="header item" href="#about">
          About
        </a>
        <a class="header item" href="#contact">
          Contact
        </a>
        <div class="right item">
          <div class="right">
            <div class="ui action left icon input">
              <i class="search icon"></i>
              <input type="text" placeholder="Search" />
              <button class="ui button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
