import React from "react";
import ReactDOM from "react-dom";
import Post from "./post.jsx";
import Profile from "./profile.jsx";
import List from "./list.jsx";

function App() {
  const postData = [];
  const profileData = [];

  const renderPost = (post, key) => {
    return <Post {...post} key={key} />;
  };
  const renderProfile = (profile, key) => {
    return <Profile {...profile} key={key} />;
  };

  return (
    <div>
      <List items={postData} itemRenderer={renderPost} />
      <List items={profileData} itemRenderer={renderProfile} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
