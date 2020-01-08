import React from 'react';

const Bullet = (props) => {

  const handleClick = () => {
    console.log(props)
  }

  const handleDelete = () => {

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
      <button className="buttonBullet" value={bullet.id} onClick={handleClick}>{symbol}</button> {bullet.content} {date} <button onClick={handleDelete}> delete </button>
    </div>
  )
}

export default Bullet
