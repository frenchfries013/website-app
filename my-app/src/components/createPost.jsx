import React, { Component } from "react";
import "../index.css";

class CreatePost extends Component {
  render() {
    return (
      <div>
        <div class="ui container action input">
          <input type="text" placeholder="Make a post."></input>
          <button class="ui button right">Post</button>
        </div>
      </div>
    );
  }
}

export default CreatePost;
