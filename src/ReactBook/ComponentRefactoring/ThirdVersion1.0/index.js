import React from "react";
import ReactDOM from "react-dom";
import List from "./components/List";
import Post from "./components/Post";

let profileData = []; // psuedo code, this has all our profile data
let postsData = []; // psuedo code, this has all our post data

class App extends React.Component {
  render() {
    return (
      <div>
        <List items={profileData} />
        <List items={postsData} itemRenderer={Post} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
