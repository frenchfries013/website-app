import React from "react";
import faker from "faker";

const CommentDetail = props => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.timeOfPost}</span>
          </div>
          <div className="text">{props.text}</div>
          <div class="meta">
            <a class="like">
              <i class="like icon"></i> 4 Likes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
