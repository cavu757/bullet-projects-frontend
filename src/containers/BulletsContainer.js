import React from 'react';
import BulletInput from '../components/BulletInput'
import Bullets from '../components/Bullets'

class BulletsContainer extends React.Component {

  render(){
    return(
      <div>
        <br></br>
        <BulletInput project={this.props.project}/>
        <Bullets bullets={this.props.project && this.props.project.bullets}/>
      </div>
    )
  }
}

export default BulletsContainer
