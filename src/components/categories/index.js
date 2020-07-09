import React from 'react';
import './styles.css';

/*
  title: String,
  itemClassName: String,
  className: String,
  items: Array<{
      title: String,
      count: Number
  }>
*/

const Categories = (props) => {
  return (
    <div className={ props.className || "sidebar-box" }>
      <h3 className="sidebar-heading">{props.title}</h3>
      <ul className="categories">
        { props.items.map((item, index) => {
          if(item.count === 1) {
            return <li className={props.itemClassName} key={index}>
                {item.title}<span style={{letterSpacing: 2 + "px"}}>({item.count})</span>
              </li>;
          } else {
            return <li className={props.itemClassName} key={index}>{item.title}<span>({item.count})</span></li>;
          }
        })}
      </ul>
    </div>
  );
}

export default Categories;