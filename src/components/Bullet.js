import React from 'react';
import { connect } from 'react-redux';
import { deleteBullet } from '../actions/deleteBullet';

const Bullet = (props) => {

  const handleClick = () => {
    console.log(props)
  }

  const handleDelete = (props) => {
    props.deleteBullet(props.bullet.id, props.bullet.project_id)
  }

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
    <div>
      <button className="buttonBullet" onClick={()=>handleClick(props)}>{symbol}</button> {bullet.content} {date} <button onClick={()=>handleDelete(props)}> delete </button>
    </div>
  )
}

export default connect(null,{deleteBullet})(Bullet)
