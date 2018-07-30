import React from "react";
import ReactDOM from "react-dom";
import moment from 'moment';

import "./styles.css";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle 
          name={tweet.author.name} 
          handle={tweet.author.handle}
        /><Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar"
    />
  );
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

function NameWithHandle({ name, handle }) {
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  );
};

const ReplyButton = () => (
  <i className="fa fa-reply btn reply-button" />
);

const RetweetButton = ({ count }) => {
  return (
    <span className="btn retweet-button">
      <i className="fa fa-retweet" />
      {count > 0 && 
        <span className="retweet-count">{count}</span>}
    </span>
  );
};

const LikeButton = ({ count }) => {
  return (
    <span className="btn like-button">
      <i className="fa fa-heart like-button" />
      {count > 0 &&
        <span className="like-count">
        {count}
        </span>
      }
    </span>
  );
};

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h btn more-options-button" />
);


const testTweet = {
  message: "Something about cats.",
  gravatar: 'xyz',
  author: {
    handle: 'catperson',
    name: 'IAMA Cat Person'
  },
  likes: 2,
  retweets: 1,
  timestamp: "2018-07-30 17:00:00"
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Tweet tweet={testTweet}/>, rootElement);
