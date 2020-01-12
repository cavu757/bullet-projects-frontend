import React from 'react';

const BulletShow = (props) => {


  let bullet = props.bullet;
  let symbol;
  let date;
  switch (bullet.category) {
    case "task":
      symbol = ".";
      date = null
      break
    case "event":
      symbol = "o";
      date = `(${bullet.date.slice(5)})`;
      break
    case "note":
      symbol = "-";
      date = null
      break
    default:
      symbol = ".";
      date = null
  }
  return (
    <div style={{textDecoration: props.bullet.complete ? "line-through" : ""}}>
      <span className="bulletCategory">{symbol}</span> {bullet.content} {date}
    </div>
  )
}

export default BulletShow
