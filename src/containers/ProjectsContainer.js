import React from 'react';
import ProjectInput from '../components/ProjectInput';
import ProjectEditContainer from '../containers/ProjectEditContainer';
import Projects from '../components/Projects';
import Project from '../components/Project';
import { connect } from 'react-redux';
import {fetchProjects} from '../actions/fetchProjects';
import {fetchAllEvents} from '../actions/fetchAllEvents';
import { Route, Link } from 'react-router-dom'
import EventsContainer from './EventsContainer'

class ProjectsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchProjects();
    this.props.fetchAllEvents();

  }


  render(){

    return(
      <div>
        <Link to={'/'}>Home</Link> *** <Link to={'/projects'}>All projects</Link> *** <Link to={'/projects/new'}>New project</Link>
        <br></br>
        <Route path='/projects/new' component={ProjectInput}/>
        <Route exact path='/projects/:id' render={(routerProps) => <Project {...routerProps} projects={this.props.projects}/>} />
        <Route path='/projects/:id/edit' render={(routerProps) => <ProjectEditContainer {...routerProps} />} />
        <Route exact path='/projects' render={(routerProps) => <Projects {...routerProps} projects={this.props.projects}/>} />
        <Route exact path='/' render={(routerProps) => <EventsContainer {...routerProps} events={this.props.events}/>} />

      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    projects: state.projects,
    events: state.events
  }
}

export default connect(mapStateToProps, {fetchProjects, fetchAllEvents})(ProjectsContainer)
