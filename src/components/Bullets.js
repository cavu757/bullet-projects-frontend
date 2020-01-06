import React from 'react';
import Bullet from './Bullet'

const Bullets = (props) => {

  let bullets = props.bullets

  return (
    <div>
      {bullets && bullets.map(b => <div key={b.id}><Bullet bullet={b}/></div>)}
    </div>
  )
}

export default Bullets
