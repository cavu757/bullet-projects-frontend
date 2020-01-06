import React from 'react';
import BulletInput from '../components/BulletInput'
import Bullets from '../components/Bullets'

class BulletsContainer extends React.Component {

  render(){
    return(
      <div>
        <BulletInput project={this.props.project}/>
        <br></br>
        <Bullets bullets={this.props.project && this.props.project.bullets}/>
      </div>
    )
  }
}

export default BulletsContainer
