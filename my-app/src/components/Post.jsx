import React, { Component } from "react";
import "../index.css";
import faker from "faker";
import CommentDetail from "./CommentDetail";

class Post extends Component {
  render() {
    return (
      <div class="ui feed">
        <div class="event">
          <div class="label">
            <img src={faker.image.avatar()} />
          </div>
          <div class="content">
            <div class="summary">
              <a class="user">Elliot Fu</a>
              <div class="date">1 Hour Ago</div>
            </div>
            <div className="text">Cameron is stupid</div>
            <div class="meta">
              <a class="like">
                <i class="like icon"></i> 4 Likes
              </a>
            </div>
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
        </div>
      </div>
    );
  }
}

export default Post;
