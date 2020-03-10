import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";

import "bootstrap/dist/css/bootstrap.css";
import Toolbar from "./components/toolbar";
import CreatePost from "./components/createPost";

const App = () => {
  return (
    <div>
      <Toolbar />
      <CreatePost />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
