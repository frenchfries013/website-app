import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";

import Toolbar from "./components/Toolbar";
import Title from "./components/Title";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import CommentDetail from "./components/CommentDetail";

const App = () => {
  return (
    <div class="ui container">
      <Title />
      <Toolbar />
      <CreatePost />
      <Post />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
