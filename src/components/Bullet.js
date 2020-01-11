import React from 'react';
import { Link } from 'react-router-dom'

const Bullet = (props) => {


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
      <Link to={`/projects/${props.bullet.project_id}/bullets/${props.bullet.id}/edit`}><button className="buttonBullet">{symbol}</button></Link> {bullet.content} {date} 
    </div>
  )
}

export default Bullet
