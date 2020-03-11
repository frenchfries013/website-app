import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";

import "bootstrap/dist/css/bootstrap.css";
import Toolbar from "./components/toolbar";
import CreatePost from "./components/createPost";
import CommentDetail from "./components/CommentDetail";

const App = () => {
  return (
    <div>
      <Toolbar/>
      <CreatePost/>
      <CommentDetail author="Cameron" timeOfPost="7:00AM" text="Your post is trash!"/>
      <CommentDetail author="Riley" timeOfPost="6:00PM" text="Do you even know english?"/>
      <CommentDetail author="Jerome" timeOfPost="5:50PM" text="their is some over they're"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
