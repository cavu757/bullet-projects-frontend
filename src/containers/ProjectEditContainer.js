import React from 'react';
import ProjectEdit from '../components/ProjectEdit';
import { connect } from 'react-redux';


class ProjectEditContainer extends React.Component {

  render(){

    let project=this.props.projects.filter(p => p.id == this.props.match.params.id)[0]
    if(project){
    return(
      <div>
        <ProjectEdit project={project}/>
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

export default connect(mapStateToProps)(ProjectEditContainer)
