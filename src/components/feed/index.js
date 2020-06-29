import React from "react";

/*
    imageUrl: String;
    title: String;
    createdDate: String;
    topic: String;
    desc: String;
*/
const Feed = (props) => {

    return (
        <div>
            <img src={props.imageUrl} alt=""/>
            <div>
                <span>{props.title}</span>
                <div>
                    <span>{props.createdDate}</span>
                    <span>{props.topic}</span>
                    <span>{props.desc}</span>
                </div>
            </div>
        </div>
    );
};

export default Feed;