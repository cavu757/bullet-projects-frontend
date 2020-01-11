import React from 'react';
import BulletEdit from '../components/BulletEdit';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {fetchProjects} from '../actions/fetchProjects'

class BulletEditContainer extends React.Component {

  componentDidMount(){
    this.props.fetchProjects()
  }

  render(){

    if(this.props.projects.length>0){
      let bullet=this.props.projects.filter(p => p.id == this.props.match.params.id)[0].bullets.filter(b=>b.id == this.props.match.params.b_id)[0]


    return(
      <div>
        <BulletEdit bullet={bullet}/>
      </div>
    )} else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  }
}

export default connect(mapStateToProps, {fetchProjects})(BulletEditContainer)
