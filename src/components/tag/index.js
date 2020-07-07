import React from 'react';
import './styles.css';

/*
  text: String,
  backgroundColor: String,
  color: String,
  className: String (wrapper className)
*/

const Tag = (props) => {
  return (
    <div 
      className={ props.className || "tag" } 
      style={{ color: props.color }}
    >
      <span 
        className="tag-cloud-link"
        style={{ backgroundColor: props.backgroundColor }} 
      >{ props.text }</span>
    </div>
  );
}

export default Tag;