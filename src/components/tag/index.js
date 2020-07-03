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
    <div className="tag">
      <h3 className="tag-heading">Tag Cloud</h3>
      <div className="tag-cloud">
        <a href="#" className="tag-cloud-link">animals</a>
        <a href="#" className="tag-cloud-link">human</a>
        <a href="#" className="tag-cloud-link">people</a>
        <a href="#" className="tag-cloud-link">cat</a>
        <a href="#" className="tag-cloud-link">dog</a>
        <a href="#" className="tag-cloud-link">nature</a>
        <a href="#" className="tag-cloud-link">leaves</a>
        <a href="#" className="tag-cloud-link">food</a>
      </div>
    </div>
  );
}

export default Tag;