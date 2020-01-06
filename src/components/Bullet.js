import React from 'react';

const Bullet = (props) => {

  let bullet = props.bullet

  if (bullet.category === "task")
  {return (
    <div>
      *  {bullet.content}
    </div>
  )}
  else if (bullet.category === "event")
  {return (
    <div>
      o  {bullet.content}
    </div>
  )}
  else if (bullet.category === "note")
  {return (
    <div>
      -  {bullet.content}
    </div>
  )}
}

export default Bullet
