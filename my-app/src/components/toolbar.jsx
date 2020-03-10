import React, { Component } from "react";
import { IoMdSearch } from "react-icons/io";
import "../index.css";

class Toolbar extends Component {
  render() {
    return (
      <div class="bg-primary text-secondary">
        <nav class="navbar navbar-dark bg-dark">
          <span class="col-2 float-left">
            <a class="col-2 text-secondary" href="#home">
              Home
            </a>
            <a class="col-2 text-secondary" href="#about">
              About
            </a>
            <a class="col-2 text-secondary" href="#contact">
              Contact
            </a>
          </span>
          <h2 class=".col-md-4 text-center">Website App!</h2>
          <span>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search.."
                name="search"
              />
              <button
                class="btn btn-outline-secondary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </span>
        </nav>
      </div>
    );
  }
}

export default Toolbar;
