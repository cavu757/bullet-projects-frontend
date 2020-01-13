import React from 'react';
import Events from '../components/Events'
import {fetchAllEvents} from '../actions/fetchAllEvents';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class EventsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchAllEvents();
  }

  render(){

    let events = this.props.events

    return(
      <div>
        <br></br>
        <Events events={events}/>
      </div>
    )
  }
}

export default connect (null, {fetchAllEvents})(EventsContainer)
