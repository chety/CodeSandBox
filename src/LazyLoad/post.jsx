import React from "react";
import data from "./data";
import "./styles.css";
import LazyLoad from "react-lazyload";

const Loading = () => <div>Posts are being loaded...</div>;

const Post = ({ id, title, body }) => {
  return (
    <div className="post">
      <LazyLoad
        once={true}
        placeholder={
          <img src={`https://picsum.photos/id/${id}/5/5`} alt="..." />
        }
      >
        <div className="post-img">
          <img src={`https://picsum.photos/id/${id}/200/200`} alt="..." />
        </div>
      </LazyLoad>

      <div className="post-body">
        <h4>{title}</h4>
        <p>{body}</p>
        <hr color="orange" />
      </div>
    </div>
  );
};

const Posts = _ => {
  return (
    <div>
      <h3>LazyLoad Demo</h3>
      <div className="post-container">
        {data.map(post => (
          <LazyLoad key={post.id} placeholder={<Loading />}>
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
            />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default Posts;
