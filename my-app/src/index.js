import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";

import Toolbar from "./components/Toolbar";
import Title from "./components/Title";
import CreatePost from "./components/CreatePost";
import CommentDetail from "./components/CommentDetail";

const App = () => {
  return (
    <div class="ui container">
      <Title />
      <Toolbar />
      <CreatePost />
      <CommentDetail
        author="Cameron"
        timeOfPost="7:00AM"
        text="Your post is trash!"
      />
      <CommentDetail
        author="Riley"
        timeOfPost="6:00PM"
        text="Do you even know english?"
      />
      <CommentDetail
        author="Jerome"
        timeOfPost="5:50PM"
        text="their is some over they're"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
