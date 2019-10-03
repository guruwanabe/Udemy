import React from 'react';

//Functional/dumb component
//props is always the first argument of a child component
const CommentDetail = (props) => {
  //console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar}/>
      </a>

      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.title}</div>
      </div>
    </div>
  );
}


export default CommentDetail;
