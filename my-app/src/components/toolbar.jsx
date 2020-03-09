import React, { Component } from "react";
import { IoMdSearch } from "react-icons/io";
import "../index.css";

class Toolbar extends Component {
  render() {
    return (
      <div class="top-toolbar">
        <span class="col-2 float-left">
          <a class="col-2" href="#home">
            Home
          </a>
          <a class="col-2" href="#about">
            About
          </a>
          <a class="col-2" href="#contact">
            Contact
          </a>
        </span>
        <span class="col-2 float-right">
          <form action="">
            <input
              class="m-2 col-6"
              type="text"
              placeholder="Search.."
              name="search"
            />
            <button type="submit">
              <i class="">
                <IoMdSearch />
              </i>
            </button>
          </form>
        </span>
      </div>
    );
  }
}

export default Toolbar;
