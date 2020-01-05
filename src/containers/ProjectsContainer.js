import React from 'react';
import ProjectInput from '../components/ProjectInput';
import Projects from '../components/Projects';
import { connect } from 'react-redux';
import {fetchProjects} from '../actions/fetchProjects';

class ProjectsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchProjects()
  }

  render(){
    return(
      <div>
        <ProjectInput/>
        <Projects projects={this.props.projects}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, {fetchProjects})(ProjectsContainer)
