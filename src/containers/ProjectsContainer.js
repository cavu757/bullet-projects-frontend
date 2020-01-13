import React from 'react';
import ProjectInput from '../components/ProjectInput';
import ProjectEditContainer from '../containers/ProjectEditContainer';
import BulletEditContainer from '../containers/BulletEditContainer';
import Projects from '../components/Projects';
import Project from '../components/Project';
import { connect } from 'react-redux';
import {fetchProjects} from '../actions/fetchProjects';
import {fetchAllEvents} from '../actions/fetchAllEvents';
import { Switch, Route, Link } from 'react-router-dom'
import EventsContainer from './EventsContainer'

class ProjectsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchProjects();
    this.props.fetchAllEvents();
  }

  render(){

    return(
      <div>
        <Link to={'/'}>Home</Link> *** <Link to={'/projects'}><span className="numberOfThings">{this.props.projects.length}</span> project(s)</Link> *** <Link to={'/projects/new'}>New project</Link>
        <br></br>
        <Switch>
        <Route exact path='/' render={(routerProps) => <EventsContainer {...routerProps} events={this.props.events}/>} />
        <Route exact path='/projects' render={(routerProps) => <Projects {...routerProps} projects={this.props.projects}/>} />
        <Route path='/projects/new' component={ProjectInput}/>
        <Route exact path='/projects/:id' render={(routerProps) => <Project {...routerProps} projects={this.props.projects}/>} />
        <Route path='/projects/:id/edit' render={(routerProps) => <ProjectEditContainer {...routerProps} projects={this.props.projects}/>} />
        <Route path='/projects/:id/bullets/:b_id/edit' render={(routerProps) => <BulletEditContainer {...routerProps} projects={this.props.projects}/>}/>


        </Switch>
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
