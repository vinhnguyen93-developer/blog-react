import React from "react";
import './styles.css';

/*
    imageUrl: String;
    title: String;
    createdDate: String;
    topic: String;
    desc: String;
*/
const Feed = (props) => {

    return (
      <div className="feed">
        <img src={props.imageUrl} alt=""/>
        <div className="body">
          <h3>
            <a href="#">{props.title}</a>
          </h3>
          <div className="text">
            <span>{props.createdDate}</span>
            <span>
              <a href="#">{props.topic}</a>
            </span>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    );
};

export default Feed;