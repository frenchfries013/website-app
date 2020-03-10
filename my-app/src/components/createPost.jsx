import React, { Component } from "react";
import "../index.css";

class CreatePost extends Component {
  render() {
    return (
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Make a post."
          aria-label="Make a post"
          aria-describedby="basic-addon2"
        ></input>
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">
            Post
          </span>
        </div>
      </div>
    );
  }
}

export default CreatePost;
