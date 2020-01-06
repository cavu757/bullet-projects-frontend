import React from 'react';
import ProjectInput from '../components/ProjectInput';
import Projects from '../components/Projects';
import Project from '../components/Project';
import { connect } from 'react-redux';
import {fetchProjects} from '../actions/fetchProjects';
import { Route, Link } from 'react-router-dom'

class ProjectsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchProjects()
  }

  render(){
    return(
      <div>
        <Link to={'/'}>Home</Link> *** <Link to={'/projects'}>All projects</Link> *** <Link to={'/projects/new'}>New project</Link>
        <br></br>
        <br></br>
        <Route path='/projects/new' component={ProjectInput}/>
        <Route path='/projects/:id' render={(routerProps) => <Project {...routerProps} projects={this.props.projects}/>} />
        <Route exact path='/projects' render={(routerProps) => <Projects {...routerProps} projects={this.props.projects}/>} />
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
